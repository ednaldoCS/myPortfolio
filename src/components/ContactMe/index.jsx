import React,{useState} from 'react'
import './style.css'


function ContactMe(){
	const [modalCopy,setModalCopy]=useState(false)
	const [modalMailSend, setMailSend]=useState(false)
	const [loading, setLoading]=useState(false)
	const  [respMailSend, setRespMailSend]=useState('')

	const copy=()=>{
        let textoCopiado = document.getElementById("myNumber")
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");

        setModalCopy(true)


        setInterval(()=>{
        	setModalCopy(false)
        },5000)
  	}


  	const sendMail=()=>{
  		setLoading(true)
  		let name=document.getElementById('clientName').value
  		let email =document.getElementById('clientEmail').value
  		let descricao= document.getElementById('serviceDescrition').value

  		let obj={
  			name,
  			email,
  			descricao
  		}


  		fetch('https://sendMailApi.ednaldocs.repl.co/sendEmail', {
  			method:'post',
  			body:JSON.stringify(obj),
  			headers: {"Content-type": "application/json"}
  		}).then((res)=>{
  			return res.json()
  		}).then((res)=>{
  			setRespMailSend(res.msg)
  			setInterval(()=>{
  				setLoading(false)
  			},5000)
  			
  		})
  	}

	return(
		<div className='contact_me'>
			<h1>Contato<span className='border_bottom_titles'></span></h1>

			<form>
				<div className='contact_by_email'>
					<div>
						<label htmlFor="name">Nome:</label>
						<input type="text" id='clientName' required/>
					</div>
					<div>
						<label htmlFor="email">Email:</label>
						<input type="text" id='clientEmail' required/>
					</div>
					<div>
						<label htmlFor="descricao">Descrição:</label>
						<textarea name="descricao" id="serviceDescrition" cols="30" rows="10" required></textarea>
					</div>

					{loading && <div className="alert alert-info " role="alert">{respMailSend}</div>}

					<button type='button' onClick={sendMail}>Enviar</button>
				</div>
				<h1>ou</h1>
				<div className='contact_by_phone_whatsapp'>
					<div className='contact_by_phone_whatsapp--phone'>
						<h3>Ligue para mim</h3>
						{modalCopy && <div className="alert alert-info " role="alert">Número compiado com sucesso</div>}
						<div>
							<input id='myNumber' type='text' disabled value='+55 (16) 99712-6087'/>
							<button type='button' onClick={copy} >Copiar Número</button>
						</div>
					</div>

					<div className='contact_by_phone_whatsapp--whatsapp'>
						<h3>Me chame no whatsapp</h3>
						<a href="https://api.whatsapp.com/send?phone=+5516997126087">Enviar mensagem</a>
					</div>
				</div>
			</form>

		</div>
	)
}


export default  ContactMe