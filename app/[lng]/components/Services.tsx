'use client';

import { useState } from 'react';
import DesignServices from './services/DesignServices';
import DevServices from './services/DevServices';

const Services = () => {
	const [currServices, setCurrServices] = useState({
		design: true,
		development: false,
		conception: false,
	});

	return (
		<section className='py-5 w-full px-2 md:px-10 lg:px-16 xl:px-20 2xl:px-72 text-[#0f172a] mb-48 lg:mb-28'>
			<div className='text-center'>
				<h1 className='text-5xl font-extrabold mb-7 mt-10 lg:mt-0'>
					Provided Services
				</h1>
				<div className='flex justify-center items-center'>
					<p className='w-[35%]'>
						My goal is to create effective digital experiences that make
						people’s lives easier and better. I hope my services will satisfy
						you.
					</p>
				</div>
				<div className='lg:mx-40 2xl:mx-56'>
					<div className='grid lg:grid-cols-3 gap-6 mt-10'>
						<button
							className={`${
								currServices.design
									? 'bg-transparent text-sky-600 border-2 border-sky-600'
									: 'bg-[#0f172a] hover:bg-[#192849] text-white'
							}  py-4 px-12 rounded-full hover:shadow-lg duration-300 font-semibold `}
							onClick={() =>
								setCurrServices({
									design: true,
									development: false,
									conception: false,
								})
							}
						>
							Design
						</button>
						<button
							className={`${
								currServices.development
									? 'bg-transparent text-sky-600 border-2 border-sky-600'
									: 'bg-[#0f172a] hover:bg-[#192849] text-white'
							}  py-4 px-12 rounded-full hover:shadow-lg duration-300 font-semibold `}
							onClick={() =>
								setCurrServices({
									development: true,
									design: false,
									conception: false,
								})
							}
						>
							Development
						</button>
						<button
							className={`${
								currServices.conception
									? 'bg-transparent text-sky-600 border-2 border-sky-600'
									: 'bg-[#0f172a] hover:bg-[#192849] text-white'
							}  py-4 px-12 rounded-full hover:shadow-lg duration-300 font-semibold `}
							onClick={() =>
								setCurrServices({
									conception: true,
									development: false,
									design: false,
								})
							}
						>
							Databases and Analyse
						</button>
					</div>
				</div>
				<div>
					{currServices.design && <DesignServices />}
					{currServices.development && <DevServices />}
				</div>
			</div>
		</section>
	);
};

export default Services;
