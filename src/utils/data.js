import CampfireIcon from '../assets/icons/campfire-icon.svg';
import TicketsIcon from '../assets/icons/tickets-icon.svg';
import PermitsIcon from '../assets/icons/permits-icon.svg';
import FishingIcon from '../assets/icons/fishing-icon.svg';

const IMG = (image) => require(`../assets/images/destinations/${image}`);

export const perksData = [
	{
		title: 'Camping & Day Use',
		content:
			'Return to your favorite spot or discover a new one that’s right for you.',
		img: CampfireIcon,
		alt: 'Campfire',
	},
	{
		title: 'Tours & Tickets',
		content: 'Reserve tours and tickets to participate in events.',
		img: TicketsIcon,
		alt: 'Tickets',
	},
	{
		title: 'Permits',
		content: 'Obtain permits for access to high-demand locations.',
		img: PermitsIcon,
		alt: 'Permits',
	},
	{
		title: 'Recreation Activities',
		content:
			'Find the best spots for hunting, fishing & recreational shooting.',
		img: FishingIcon,
		alt: 'Fishing',
	},
];

export const destinationsList = [
	{
		title: 'Duluth, United States',
		image: IMG('brown-house-near-pine-trees-covered-with-snow-754268.jpg'),
		alt: 'Brown House Near Pine Trees Covered With Snow',
	},
	{
		title: 'Viksdalen, Norway',
		image: IMG('green-leafed-trees-2271098.jpg'),
		alt: 'Green Leafed Trees',
	},
	{
		title: 'Ulziit, Mongolia',
		image: IMG('drone-view-of-magnificent-rocky-terrain-in-mongolia-4326283.jpg'),
		alt: 'Magnificent Rocky Terrain in Mongolia',
	},
	{
		title: 'Pyskowice, Poland',
		image: IMG('woodland-stream-covered-with-snow-816042.jpg'),
		alt: 'Woodland Stream Covered with Snow',
	},
	{
		title: 'Switzerland',
		image: IMG('piled-of-stones-near-lake-2825368.jpg'),
		alt: 'Piled of Stones Near Lake',
	},
	{
		title: 'Cabin in the Woods',
		image: IMG('autumn-leaves-beautiful-color-206648.jpg'),
		alt: 'Brown Wooden House on Orange Leaf Trees',
	},
	{
		title: 'Breitenwang, Austria',
		image: IMG('mountains-between-the-body-of-water-1482931.jpg'),
		alt: 'River in the Middle of Mountains',
	},
	{
		title: 'Innerthal, Switzerland',
		image: IMG('photo-taken-on-body-of-water-1127032.jpg'),
		alt: 'Hills and Body of Water',
	},
	{
		title: 'Field, Canada',
		image: IMG('alberta-amazing-attraction-banff-417074.jpg'),
		alt: 'Lake and Mountain',
	},
	{
		title: 'Sodankylä, Finland',
		image: IMG('photo-of-house-covered-with-snow-1493202.jpg'),
		alt: 'House Covered With Snow',
	},
	{
		title: 'Schönau am Königssee, Germany',
		image: IMG('person-on-a-bridge-near-a-lake-747964.jpg'),
		alt: 'Person on a Bridge Near a Lake',
	},
	{
		title: 'Treehouse',
		image: IMG('black-and-gray-dome-tent-1795507.jpg'),
		alt: 'Black and Gray Dome Tent',
	},
];
