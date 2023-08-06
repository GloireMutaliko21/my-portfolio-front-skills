'use client';

import { BiLogoGithub } from 'react-icons/bi';
import { PiLinkedinLogoThin, PiTwitterLogoThin } from 'react-icons/pi';
import Typewriter from 'react-ts-typewriter';

const Hero = () => {
	return (
		<section className='py-5 w-full px-2 md:px-10 lg:px-16 xl:px-20 2xl:px-72 h-[80vh] text-[#0f172a]'>
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
							text={['Frontend developer', 'UI/UX Designer']}
							loop={true}
							speed={250}
							cursor
						/>
					</div>
					<div className='w-full lg:max-w-[50%] mt-6 font-light'>
						<p>
							I am Gloire Mutaliko, web fullstack developer but passionate with
							frontend development and UI/UX design. I design and build web,
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
			</div>
		</section>
	);
};

export default Hero;
