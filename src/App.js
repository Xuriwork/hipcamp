import React from 'react';
import './App.scss';
import { perksData, destinationsList } from './utils/data';
import LocationMarksIcon from './assets/icons/location-to-location-icon.svg';

import Logo from './assets/icons/hipcamp-logo.svg';

export const App = () => {
	return (
		<div className='app-component'>
			<section className='hero-section'>
				<nav>
					<div className='left-nav'>
						<img src={Logo} alt='hitcamp logo' />
						<ul>
							<li>Home</li>
							<li>Destination</li>
							<li>Near me</li>
							<li>Events</li>
							<li>Blog</li>
							<li>Gallery</li>
							<li>About</li>
							<li>Contact us</li>
						</ul>
					</div>
					<div className='right-nav'>
						<button>Sign up</button>
						<button>Sign In</button>
					</div>
				</nav>
				<div>
					<h1>
						Find Yourself <br /> Outside.
					</h1>
					<p>
						Book unique camping experiences on over 300,000 campsites, cabins,
						RV parks, public parks and more.
					</p>
					<button className='cta-button'>Discover</button>
				</div>
			</section>
			<section className='perks-section'>
				<div className='cards-container'>
					{perksData.map((card, index) => (
						<div className='card' key={index}>
							<img src={card.img} alt={card.alt} />
							<h3>{card.title}</h3>
							<p>{card.content}</p>
						</div>
					))}
				</div>
			</section>
			<section className='destinations-section'>
				<img src={LocationMarksIcon} alt='Location to location' />
				<h1>Explore Destinations <br/> & Activities</h1>
				<div className='destinations-cards-container'>
					{
						destinationsList.map((destination, index) => (
							<div key={index} className='destinations-card'>
								<div stlye={{ backgroundImage: `url('${destination.image}')` }}>
									<img src={destination.image} alt={destination.alt} />
								</div>
								<div>
									<h4>{destination.title}</h4>
									<p>Book unique camping experiences on over 300,000 campsites.</p>
									<button>Read More</button>
								</div>
							</div>
						))
					}
				</div>
			</section>
		</div>
	);
};

export default App;
