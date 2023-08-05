'use client';

import { HiMiniArrowUpRight } from 'react-icons/hi2';

import { useTranslation } from '@/app/i18n/client';
import { socialMedia } from '../data/footerdata';
import SocialMedia from './footer/SocialMedia';

const Footer = ({ lng }: any) => {
	const { t } = useTranslation(lng, 'footer', {});
	return (
		<footer className='py-5 xl:py-10 w-full mt-16 bg-[#0f172a] text-white px-2 md:px-10 lg:px-16 xl:px-20 2xl:px-72 lg:h-screen 2xl:h-[75vh]'>
			<section className='py-14 -translate-y-[80%] px-5 lg:px-14 mt-12 rounded-2xl flex flex-wrap justify-between items-center gap-y-10 bg-[url("/images/newsletter-bg.webp")] bg-cover text-center lg:text-start'>
				<div className='max-w-full lg:max-w-[50%] px-8'>
					<h1 className='font-bold text-3xl md:text-5xl !leading-tight'>
						Subscribe to my newsletter
					</h1>
					<p className='mt-6 leading-relaxed text-sm md:text-base'>
						Join me and receive daily updates on opportunities to boost your
						business and effectively manage your activities, whatever they may
						be.
					</p>
				</div>
				<div className='min-w-[50%] w-full lg:w-1/2 h-full'>
					<div className='glass-effetct shadow p-1 rounded-full flex gap-x-2 justify-between border-white/30 border-[0.2px] w-full'>
						<input
							type='text'
							placeholder='Entrer your email address'
							className='h-full min-h-[50px] bg-transparent pl-7 placeholder:text-white placeholder:text-sm outline-none w-[70%]'
						/>
						<button className='bg-[#0c4a6e] hover:bg-[#106292] rounded-full px-5 min-w-[30%] text-sm font-medium duration-300'>
							Subscribe
						</button>
					</div>
				</div>
			</section>
			<section className='pt-20 -translate-y-[70%] flex flex-wrap justify-between items-center gap-y-10'>
				<div className='max-w-full lg:max-w-[50%]'>
					<h1 className='font-bold text-3xl md:text-5xl !leading-tight'>
						Lets make something
						<br /> great together
					</h1>
					<button className='text-[#0c4a6e] bg-white rounded-full mt-12 px-5 min-w-[30%] font-semibold duration-300 py-3 flex items-center gap-2'>
						Contact me
						<HiMiniArrowUpRight className='text-xl' />
					</button>
				</div>
				<div className='max-w-full lg:max-w-[30%]'>
					<p>
						Find me on my social and professional networks, leave me a message
						and I&apos;ll get back to you as soon as possible.
					</p>
					<div className='mt-7 grid lg:grid-cols-3 gap-6'>
						{socialMedia.map((socMed, key) => (
							<SocialMedia
								key={key}
								externalLink={socMed.externalLink}
								icon={socMed.icon}
								label={socMed.label}
							/>
						))}
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
