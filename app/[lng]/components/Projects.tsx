import Image from 'next/image';

const Projects = () => {
	return (
		<section className='py-5 w-full px-2 md:px-10 lg:px-16 xl:px-20 2xl:px-72 text-[#0f172a] mb-10 lg:mb-28'>
			<div className='text-center lg:text-start'>
				<h1 className='text-5xl font-extrabold mb-7 mt-10 lg:mt-0'>
					Recent projects
				</h1>
				<div className='flex justify-start items-start'>
					<p className='w-90 xl:w-[400px]'>
						Take a look at some of my recent achievements, and let me know if
						you have any suggestions for improvement or encouragement.
					</p>
				</div>

				<div className='carousel space-x-4 mt-10'>
					<div className='carousel-item flex flex-col'>
						<a href='/' target='_blank'>
							<div className='w-96 h-96 bg-slate-100'>
								<Image
									src='/images/projects/w-trans.jpg'
									alt=''
									width={500}
									height={500}
									className='w-full h-full object-cover scale-90 hover:scale-105 duration-300'
								/>
							</div>
							<div className='w-96'>
								<p className='text-2xl font-bold text-neutral mt-5'>
									Landing page - Creative landing page for W-trans Company
								</p>
							</div>
						</a>
					</div>
					{/* <a
						href='/'
						target='_blank'
						className={'carousel-item flex flex-col w-96 h-96 '}
					>
						<div className='h-[360px] w-full'>
							<Image
								src='/images/projects/w-trans.jpg'
								alt=''
								width={500}
								height={500}
								className='w-full h-full object-contain'
							/>
						</div>
						<p className='text-3xl font-bold text-white'>Landing page</p>
					</a> */}
				</div>
			</div>
		</section>
	);
};

export default Projects;
