const Experience = () => {
	return (
		<section className='py-5 w-full px-2 md:px-10 lg:px-16 xl:px-20 2xl:px-72 h-screen text-[#0f172a] my-10 lg:mt-28'>
			<div className='flex justify-between flex-col lg:flex-row items-center'>
				<div className='bg-transparent'>
					<div className='relative bg-gradient-to-b from-slate-100 to-white rounded-xl h-[430px] w-[360px] border-b'>
						<div className='flex flex-col justify-center items-center pt-10'>
							<p className='text-9xl font-bold text-sky-700 mb-14'>07</p>
							<p className='font-medium text-lg'>Years of Experience</p>
						</div>
						<div className='absolute bottom-10 -right-28 p-[2px] bg-gradient-to-l from-slate-400 to-slate-200 rounded-md'>
							<div className='rounded-md p-10 py-7 bg-gradient-to-r from-[#696961] to-[#0f172a] flex gap-5 items-center'>
								<p className='font-extrabold text-5xl text-sky-400'>100%</p>
								<div className='text-white'>
									<p>Clients</p>
									<p>Satisfections</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-end'>
					<h1 className='text-5xl font-extrabold mb-5'>My Advantage</h1>
					<p className=''>
						I&apos;m your all-in-one project solution. Experience the advantage
						of an all-inclusive
						<br />
						project solution, where excellence, speed, and responsiveness
						converge to <br />
						ensure the highest quality outcome.
					</p>
					<div className='grid md: grid-cols-2 lg:grid-cols-3'></div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
