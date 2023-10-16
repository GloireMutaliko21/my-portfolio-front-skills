'use client';

import Image from 'next/image';
import { BiLogoGithub } from 'react-icons/bi';
import { PiLinkedinLogoThin, PiTwitterLogoThin } from 'react-icons/pi';
import { GoShieldCheck } from 'react-icons/go';
import Typewriter from 'react-ts-typewriter';

const Hero = () => {
	return (
		<section
			id='home'
			className='py-5 w-full px-2 md:px-10 lg:px-16 xl:px-20 2xl:px-72 lg:h-[80vh] text-[#0f172a]'
		>
			<div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-y-14 h-full'>
				<div className='h-full flex flex-col justify-center'>
					<h2 className='text-2xl md:text-3xl lg:text-5xl text-slate-600'>
						Hi there, 🤗
					</h2>
					<h1 className='text-3xl md:text-5xl lg:text-6xl font-bold my-4'>
						I&apos;m Gloire Mutaliko
					</h1>
					<div className='text-sky-700 dark:text-connerColor text-xl sm:text-4xl'>
						<Typewriter
							text={['Fullstack developer', 'UI/UX Designer']}
							loop={true}
							speed={250}
							cursor
						/>
					</div>
					<div className='w-full lg:max-w-[50%] mt-6 font-light'>
						<p>
							I am Gloire Mutaliko, web fullstack developer with more passion to
							modern web and web mobile development. I design and build web,
							mobile and desktop applications.
						</p>
					</div>
					<div className='mt-7 flex gap-10 items-center'>
						<button className='bg-[#0f172a] hover:bg-[#192849] text-white py-2 px-12 rounded-full hover:shadow-lg duration-300 font-semibold'>
							Hire me,
						</button>
						<div className='flex items-center gap-4'>
							<a href={''} target='_blank'>
								<div className='border border-[#e2e2e2] text-sm text-[#1e2a48] rounded-full justify-center p-3 flex items-center hover:bg-[#f4f4f4]'>
									<div className='text-base'>
										<PiTwitterLogoThin />
									</div>
								</div>
							</a>
							<a href={''} target='_blank'>
								<div className='border border-[#e2e2e2] text-sm text-[#1e2a48] rounded-full justify-center p-3 flex items-center hover:bg-[#f4f4f4]'>
									<div className='text-base'>
										<PiLinkedinLogoThin />
									</div>
								</div>
							</a>
							<a href={''} target='_blank'>
								<div className='border border-[#e2e2e2] text-sm text-[#1e2a48] rounded-full justify-center p-3 flex items-center hover:bg-[#f4f4f4]'>
									<div className='text-base'>
										<BiLogoGithub />
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className='relative'>
					<div className='hidden lg:block relative h-[80vh] 2xl:h-[50vh] z-0 w-72 bg-[#0f172a] overflow-hidden'>
						<div className='absolute border-white/40 w-36 h-36 border-2 -top-7 -left-7 rounded-full'></div>
						<div className='absolute border-white/40 w-36 h-36 border-2 -bottom-7 -right-7 rounded-full'></div>
						<div className='absolute border-white/40 w-96 h-96 border-2 -bottom-7 -right-7 rounded-full'></div>
						<div className='absolute border-white/40 w-96 h-96 border-2 -top-7 -left-7 rounded-full'></div>
						<div className='absolute w-14 h-14 bg-white/75 top-[17%] left-[50%] rotate-45'></div>
						{/* <div className='absolute w-14 h-14 bg-white/75 bottom-[10%] right-[60%] rotate-45'></div> */}
					</div>
					<div className='lg:absolute lg:top-[70px] lg:right-[30%]'>
						<div className='bg-[#3fc4e9] w-96 h-96 rounded-full bg-[url("/images/me.png")] bg-cover relative'>
							<div className='absolute w-24 h-24 border p-3 bg-white rounded-xl shadow-2xl'>
								<Image
									src={'/images/skills/next.png'}
									width={500}
									height={500}
									alt='Next.JS'
								/>
							</div>
							<div className='absolute top-14 right-0 w-24 h-24 border p-3 bg-white rounded-xl shadow-2xl flex justify-center items-center'>
								<Image
									src={'/images/skills/figma.png'}
									width={500}
									height={500}
									alt='Figma'
									className='object-cover'
								/>
							</div>
							<div className='absolute top-72 right-10 w-24 h-24 border p-3 bg-white rounded-full shadow-2xl flex justify-center items-center'>
								<Image
									src={'/images/skills/tailwind.png'}
									width={500}
									height={500}
									alt='Figma'
									className='object-cover'
								/>
							</div>
							<div className='absolute border shadow-2xl flex gap-3 items-center px-7 py-2 bg-white rounded-full bottom-8 left-0 lg:-left-28'>
								<GoShieldCheck className='text-5xl text-green-500' />
								<div>
									<p className='text-xl font-bold mb-1'>30+</p>
									<p className='text-sm font-light'>Completed Projects</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
