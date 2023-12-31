'use client';

import { useState, useEffect } from 'react';
import {
	usePathname,
	useRouter,
	useSelectedLayoutSegment,
} from 'next/navigation';
import Link from 'next/link';
import { DiAtom } from 'react-icons/di';
import { PiDownloadSimpleThin } from 'react-icons/pi';

import FullPath from './full-path';
import { useTranslation } from '@/app/i18n/client';
import { languages } from '@/app/i18n/settings';

const Navbar = ({ lng }: any) => {
	const { t } = useTranslation(lng, 'navbar', {});

	const activeLink = useSelectedLayoutSegment();
	const fullPath = usePathname();
	const router = useRouter();

	const [scrolling, setScrolling] = useState(false);

	const lg = languages.map((l) => ({ label: l.toLocaleUpperCase(), value: l }));

	const onLangChange = (value: string) => {
		router.replace(`./${value}/${activeLink != null ? activeLink : '/'}`);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			className={`${
				scrolling
					? 'bg-[#0f172a] shadow text-white fixed'
					: 'bg-transparent text-[#0f172a] border-[#0f172a]'
			} duration-1000 text-primary-400 top-0 left-0 right-0 backdrop-blur-md z-10 py-3 xl:py-5 px-2 md:px-10 lg:px-16 xl:px-20 2xl:px-72 w-full flex justify-between items-center`}
		>
			<FullPath
				label={
					<div className='flex items-center gap-2 text-2xl'>
						<DiAtom className='text-4xl' />
						<span className='font-black'>GLOIRE</span>
					</div>
				}
				link='/#'
			/>
			<div className='hidden lg:flex gap-9 items-center'>
				<Link
					href={`${fullPath.slice(0, 3)}/#`}
					className={`duration-150 ${
						activeLink === '#' && 'border-b-2 pb-3 font-medium'
					} hover:border-b-4 hover:font-medium`}
				>
					Home
				</Link>
				<Link
					href={`${fullPath.slice(0, 3)}/#about`}
					className={`duration-150 ${
						activeLink === '#about' && 'border-b-2 pb-3 font-medium'
					} hover:border-b-4 hover:font-medium`}
				>
					About
				</Link>
				<Link
					href={`${fullPath.slice(0, 3)}/#services`}
					className={`duration-150 ${
						activeLink === '#work' && 'border-b-2 pb-3 font-medium'
					} hover:border-b-4 hover:font-medium`}
				>
					Services
				</Link>
				<Link
					href={`${fullPath.slice(0, 3)}/#projects`}
					className={`duration-150 ${
						activeLink === '#work' && 'border-b-2 pb-3 font-medium'
					} hover:border-b-4 hover:font-medium`}
				>
					Projects
				</Link>
				<Link
					href={`${fullPath.slice(0, 3)}/#contacts`}
					className={`duration-150 ${
						activeLink === '#contact' && 'border-b-2 pb-3 font-medium'
					} hover:border-b-4 hover:font-medium`}
				>
					Contacts
				</Link>
			</div>
			<div>
				<a href='/CV_GloireMutaliko.pdf' download>
					<button
						className={`${
							scrolling
								? 'text-[#0f172a] bg-white hover:bg-white/90 shadow-white'
								: 'bg-[#0f172a] hover:bg-[#192849] text-white'
						} py-3 px-10 rounded-full hover:shadow-lg duration-300 flex gap-4 items-center`}
					>
						<span>Resume</span>
						<PiDownloadSimpleThin className='text-xl' />
					</button>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
