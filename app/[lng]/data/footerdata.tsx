import { TfiEmail } from 'react-icons/tfi';
import { PiFacebookLogo } from 'react-icons/pi';
import { PiInstagramLogoThin } from 'react-icons/pi';
import { PiTwitterLogoThin } from 'react-icons/pi';
import { PiLinkedinLogoThin } from 'react-icons/pi';
import { BiLogoGithub } from 'react-icons/bi';

export const socialMedia: { label: string; icon: any; externalLink: string }[] =
	[
		{
			label: 'Email me',
			icon: <TfiEmail />,
			externalLink: '/#contacts',
		},
		{
			label: 'Facebook',
			icon: <PiFacebookLogo />,
			externalLink: 'https://web.facebook.com/golla.mutaliko',
		},
		{
			label: 'Instagram',
			icon: <PiInstagramLogoThin />,
			externalLink:
				'https://instagram.com/irgloiremutaliko?igshid=MjEwN2IyYWYwYw==',
		},
		{
			label: 'Twitter',
			icon: <PiTwitterLogoThin />,
			externalLink: 'https://twitter.com/GloireMutaliko',
		},
		{
			label: 'LinkedIn',
			icon: <PiLinkedinLogoThin />,
			externalLink: 'https://www.linkedin.com/in/gloire-mutaliko-2b6733211/',
		},
		{
			label: 'Github',
			icon: <BiLogoGithub />,
			externalLink: 'https://github.com/GloireMutaliko21',
		},
	];

export const navigationLink: { label: string; link: string }[] = [
	{
		label: 'Home',
		link: '/#',
	},
	{
		label: 'About',
		link: '/#about',
	},
	{
		label: 'Services',
		link: '/#services',
	},
	{
		label: 'Projects',
		link: '/#projects',
	},
	{
		label: 'Contacts',
		link: '/#contacts',
	},
];
