import React, { useState } from 'react';
import './App.scss';
import { perksData, destinationsList } from './utils/data';

import LocationMarksIcon from './assets/icons/location-to-location-icon.svg';
import Tent from './assets/images/tent.svg';
import Logo from './assets/icons/hipcamp-logo.svg';
import MailIcon from './assets/icons/mail-icon.svg';
import SendPlane from './assets/icons/send-plane-icon.svg';

export const App = () => {
	const [email, setEmail] = useState('');

	const handleChange = (e) => setEmail(e.target.value);

	const handleSendEmail = () => {
		if (email.trim() === '') return;
		console.log('Email sent!');
	};

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
				<h1>
					Explore Destinations <br /> & Activities
				</h1>
				<div className='destinations-cards-container'>
					{destinationsList.map((destination, index) => (
						<div key={index} className='destinations-card'>
							<div
								style={{ backgroundImage: `url(${destination.image})` }}
								className='card-image'
							></div>
							<div>
								<h4>{destination.title}</h4>
								<p>
									Book unique camping experiences on over 300,000 campsites.
								</p>
								<button>Read More</button>
							</div>
						</div>
					))}
				</div>
				<button className='view-all-button'>View all</button>
			</section>
			<section className='subscribe-section'>
				<div>
					<h1>Let's Stay in Touch</h1>
					<p>
						Get travel planning ideas, helpful tips, and stories from our
						visitors delivered right to your inbox.
					</p>
					<div className='input-container'>
						<img src={MailIcon} alt='' className='mail-icon' />
						<input
							type='email'
							name='emailAddress'
							placeholder='Email Address'
							value={email}
							onChange={handleChange}
						/>
						<button onClick={handleSendEmail}>
							<img src={SendPlane} alt='' className='send-icon' />
						</button>
					</div>
				</div>
				<div className='image-container'>
					<img src={Tent} alt='Camping tent in the woods' />
				</div>
			</section>
		</div>
	);
};

export default App;
