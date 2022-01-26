
import React from 'react'
import './style.css'


// Portfolio items
import Checkout from '../../assets/portfolioAssets/checkoutPage.png';
import EdieHomePage from '../../assets/portfolioAssets/edieHomePage.png';
import ErrorPage from '../../assets/portfolioAssets/erro404page.png';
import Galery from '../../assets/portfolioAssets/gallery.png';
import InteriorDesign from '../../assets/portfolioAssets/interiorDesigner.png';
import Myteam from '../../assets/portfolioAssets/myTeam.png';
import RecipePage from '../../assets/portfolioAssets/recipePage.png';
import RickAndMorth from '../../assets/portfolioAssets/Captura de tela de 2022-01-22 23-53-16.png';
import RandomQuote from '../../assets/portfolioAssets/Captura de tela de 2022-01-22 23-55-28.png';
import ImageUpload from '../../assets/portfolioAssets/Captura de tela de 2022-01-22 23-56-18.png';
import GeniusGame from '../../assets/portfolioAssets/Captura de tela de 2022-01-22 23-59-36.png';
import ToDo from '../../assets/portfolioAssets/Captura de tela de 2022-01-23 00-04-16.png';
import SpotifyClone from '../../assets/portfolioAssets/Captura de tela de 2022-01-23 00-48-12.png';
import Finans from '../../assets/portfolioAssets/Captura de tela de 2022-01-23 00-34-35.png'


function Portfolio() {
	return (
		<div className='portfolio_container'>
			<h1>Portfolio
			<span className='border_bottom_titles'></span></h1>

			<div className='portfolio_itens_container'>
				{/*inicio portfolio item*/}
				<div className='portfolio_item'>
					<h3>Checkout page</h3>
					<div className='portfolio_item--img'>
						<img src={Checkout} alt="Checkout page"/>
					</div>
					<a href="https://ednaldocs.github.io/checkout-page/" target='_blank'>Demo</a>
				</div>
				{/*fim portfolio item*/}

				{/*inicio portfolio item*/}
				<div className='portfolio_item'>
					<h3>Edie Home Page</h3>
					<div className='portfolio_item--img'>
						<img src={EdieHomePage} alt="EdieHomePage page"/>
					</div>
					<a href="https://ednaldocs.github.io/homepage/" target='_blank'>Demo</a>
				</div>
				{/*fim portfolio item*/}

				{/*inicio portfolio item*/}
				<div className='portfolio_item'>
					<h3>Error Page</h3>
					<div className='portfolio_item--img'>
						<img src={ErrorPage} alt="Error page"/>
					</div>
					<a href="https://ednaldocs.github.io/erro-404/" target='_blank'>Demo</a>
				</div>
				{/*fim portfolio item*/}


				{/*inicio portfolio item*/}
				<div className='portfolio_item'>
					<h3>Galery</h3>
					<div className='portfolio_item--img'>
						<img src={Galery} alt='Galeria page'/>
					</div>
					<a href="https://ednaldocs.github.io/my-gallery/" target='_blank'>Demo</a>
				</div>
				{/*fim portfolio item*/}

				{/*inicio portfolio item*/}
				<div className='portfolio_item'>
					<h3>Interior Designer</h3>
					<div className='portfolio_item--img'>
						<img src={InteriorDesign} alt='Interior Designer page'/>
					</div>
					<a href="https://ednaldocs.github.io/interior-consultant/" target='_blank'>Demo</a>
				</div>
				{/*fim portfolio item*/}


				{/*inicio portfolio item*/}
				<div className='portfolio_item'>
					<h3>Designer Team</h3>
					<div className='portfolio_item--img'>
						<img src={Myteam} alt='Myteam page'/>
					</div>
					<a href="https://ednaldocs.github.io/Myteam/" target='_blank'>Demo</a>
				</div>
				{/*fim portfolio item*/}

				{/*inicio portfolio item*/}
				<div className='portfolio_item'>
					<h3>Página de receitas</h3>
					<div className='portfolio_item--img'>
						<img src={RecipePage} alt='receitas page'/>
					</div>
					<a href="https://ednaldocs.github.io/recipe-blog/" target='_blank'>Demo</a>
				</div>
				{/*fim portfolio item*/}

				{/*inicio portfolio item*/}
				<div className='portfolio_item'>
					<h3>Rick And Morth personagens infos</h3>
					<div className='portfolio_item--img'>
						<img src={RickAndMorth} alt='RickAndMorth page'/>
					</div>
					<a href="https://ednaldocs.github.io/rickAndMortyApi/" target='_blank'>Demo</a>
				</div>
				{/*fim portfolio item*/}

				{/*inicio portfolio item*/}
				<div className='portfolio_item'>
					<h3>Random Quote motivacional</h3>
					<div className='portfolio_item--img'>
						<img src={RandomQuote} alt='RandomQuote page'/>
					</div>
					<a href="https://ednaldocs.github.io/randomQuote/" target='_blank'>Demo</a>
				</div>
				{/*fim portfolio item*/}

				{/*inicio portfolio item*/}
				<div className='portfolio_item'>
					<h3>Imagens Upload</h3>
					<div className='portfolio_item--img'>
						<img src={ImageUpload} alt='Image Upload page'/>
					</div>
					<a href="https://ednaldocs.github.io/img-upload/" target='_blank'>Demo</a>
				</div>
				{/*fim portfolio item*/}


				{/*inicio portfolio item*/}
				<div className='portfolio_item'>
					<h3>Genius Game</h3>
					<div className='portfolio_item--img'>
						<img src={GeniusGame} alt='Genius Game page'/>
					</div>
					<a href="https://ednaldocs.github.io/geniusGame/" target='_blank'>Demo</a>
				</div>
				
				{/*fim portfolio item*/}


				{/*inicio portfolio item*/}
				<div className='portfolio_item'>
					<h3>ToDo - lista de tarefas</h3>
					<div className='portfolio_item--img'>
						<img src={ToDo} alt='ToDo page'/>
					</div>
					<a href="https://ednaldocs.github.io/todoapp/" target='_blank'>Demo</a>
				</div>
				{/*fim portfolio item*/}


				{/*inicio portfolio item*/}
				<div className='portfolio_item'>
					<h3>Clone Spotify</h3>
					<div className='portfolio_item--img'>
						<img src={SpotifyClone} alt='SpotifyClone page'/>
					</div>
					<a href="https://ednaldocs.github.io/spotifyClone/" target='_blank'>Demo</a>
				</div>
				{/*fim portfolio item*/}

				{/*inicio portfolio item*/}
				<div className='portfolio_item'>
					<h3>Finans</h3>
					<div className='portfolio_item--img'>
						<img src={Finans} alt='Finans page'/>
					</div>
					<a href="https://ednaldocs.github.io/finans/" target='_blank'>Demo</a>
				</div>
				{/*fim portfolio item*/}

				
			</div>
		</div>
	)
}

export default Portfolio