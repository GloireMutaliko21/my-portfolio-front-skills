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
			externalLink: '/',
		},
		{
			label: 'Facebook',
			icon: <PiFacebookLogo />,
			externalLink: '/',
		},
		{
			label: 'Instagram',
			icon: <PiInstagramLogoThin />,
			externalLink: '/',
		},
		{
			label: 'Twitter',
			icon: <PiTwitterLogoThin />,
			externalLink: '/',
		},
		{
			label: 'LinkedIn',
			icon: <PiLinkedinLogoThin />,
			externalLink: '/',
		},
		{
			label: 'Github',
			icon: <BiLogoGithub />,
			externalLink: '/',
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
