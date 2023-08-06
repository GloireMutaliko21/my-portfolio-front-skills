'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 250) {
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
					: 'bg-transparent text-[#0f172a]'
			} transition-all duration-300 text-primary-400 top-0 left-0 right-0 backdrop-blur-md z-10 py-3 xl:py-5 px-2 md:px-10 lg:px-16 xl:px-20 2xl:px-72 w-full flex justify-between items-center`}
		>
			Navbar
		</nav>
	);
};

export default Navbar;
