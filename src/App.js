/* eslint-disable no-control-regex */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { perksData, destinationsList } from './utils/data';
import cogoToast from 'cogo-toast';

import Logo from './assets/icons/hipcamp-logo.svg';
import HamburgerMenuIcon from './assets/icons/hamburger-menu-icon.svg';
import LocationMarksIcon from './assets/icons/location-to-location-icon.svg';
import Tent from './assets/images/tent.svg';
import MailIcon from './assets/icons/mail-icon.svg';
import SendPlane from './assets/icons/send-plane-icon.svg';
import UpArrow from './assets/icons/orange-up-arrow.svg';
import GooglePlayBadge from './assets/images/google_play_badge.png';
import AppleStoreBadge from './assets/images/apple_store_badge.png';

import './App.scss';

export const App = () => {
	const [open, setOpen] = useState(false);
	const [email, setEmail] = useState('');

	const toggleHamburgerMenu = () => setOpen((open) => !open);

	const handleChange = (e) => setEmail(e.target.value);

	const handleSendEmail = () => {
		if (email.trim() === '') return;
		const pattern = new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+');
		const result = pattern.test(email);
		if (result) {
			cogoToast.loading('Sending...', { hideAfter: 2 }).then(() => {
				cogoToast.success('Email sent!');
			});
		} else {
			cogoToast.loading('Loading...', { hideAfter: 2 }).then(() => {
				cogoToast.error('Invalid email address');
			});
		}
	};

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

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
					<div className='nav-mobile'>
						<button
							className='hamburger-menu-button'
							onClick={toggleHamburgerMenu}
						>
							<img src={HamburgerMenuIcon} alt='' />
						</button>
						{open && (
							<ul>
								<li>Sign Up</li>
								<li>Sign In</li>
								<li>Home</li>
								<li>Destination</li>
								<li>Near me</li>
								<li>Events</li>
								<li>Blog</li>
								<li>Gallery</li>
								<li>About</li>
								<li>Contact us</li>
							</ul>
						)}
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
				<div className='subscribe-section-left'>
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
			<footer>
				<button className='up-arrow-button' onClick={scrollToTop}>
					<img src={UpArrow} alt='' />
				</button>
				<div className='footer-hipcamp-info'>
					<h3>Hipcamp is everywhere you want to camp.</h3>
					<p>
						Discover unique experiences on ranches, nature preserves, farms,
						vineyards, and public campgrounds across the U.S. Book tent camping,
						treehouses, cabins, yurts, primitive backcountry sites, car camping,
						airstreams, tiny houses, RV camping, glamping tents and more.
					</p>
					<h3>Download Our App</h3>
					<div className='store-badges-container'>
						<img src={GooglePlayBadge} alt='Google Play Store' />
						<img src={AppleStoreBadge} alt='Apple Store' />
					</div>
				</div>
				<div className='footer-links-container'>
					<div>
						<h3>Get to Know Us</h3>
						<a
							href='https://www.uplabs.com/badr4231'
							target='_blank'
							rel='noopener noreferrer'
							className='special-link'
						>
							Designer
						</a>
						<a href='#'>About Us</a>
						<a href='#'>Rules & Reservation Policies</a>
						<a href='#'>Accessibility</a>
						<a href='#'>Media Center</a>
						<a href='#'>Site Map</a>
					</div>
					<div>
						<h3>Plan with Us</h3>
						<a href='#'>Find Trip Inspiration</a>
						<a href='#'>Build a Trip</a>
						<a href='#'>Buy a Pass</a>
						<a href='#'>Enter a Lottery</a>
					</div>
					<div>
						<h3>Let Us Help You</h3>
						<a href='#'>Your Account</a>
						<a href='#'>Your Reservations</a>
						<a href='#'>Contact Us</a>
						<a href='#'>Help Center</a>
						<a href='#'>Submit Feedback</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default App;
