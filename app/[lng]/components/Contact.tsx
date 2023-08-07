import { BsArrowRight } from 'react-icons/bs';

const Contact = () => {
	return (
		<section className='py-5 w-full px-2 md:px-10 lg:px-16 xl:px-20 2xl:px-72 text-[#0f172a] mb-10 lg:mb-28'>
			<div className='text-center'>
				<div className='mb-10 lg:mb-14'>
					<h1 className='text-5xl font-extrabold mb-7'>Let&apos;s Talk</h1>
					<div className='w-full flex justify-center'>
						<p className='w-90 xl:w-[400px]'>
							How can I help you? Let’s get in touch 👋. Fill our the form below
							to get started
						</p>
					</div>
				</div>
				<div className='grid lg:grid-cols-3 gap-7'>
					<div className='col-span-2 rounded border bg-slate-100 p-10 lg:px-20'>
						<h1 className='text-3xl font-extrabold mb-7'>Get In Touch</h1>
						<div>
							<form action='' className='w-full'>
								<div className='w-full flex gap-6'>
									<div className='w-full lg:w-[50%]'>
										<input
											type='text'
											placeholder='Your Name *'
											className='outline-none bg-transparent pb-4 border-b border-[#0f172a] w-full placeholder:text-[#0f172a] placeholder:font-light focus:border-sky-600 text-sky-600 font-medium'
										/>
									</div>
									<div className='w-full lg:w-[50%]'>
										<input
											type='email'
											placeholder='Your Email *'
											className='outline-none bg-transparent pb-4 border-b border-[#0f172a] w-full placeholder:text-[#0f172a] placeholder:font-light focus:border-sky-600 text-sky-600 font-medium'
										/>
									</div>
								</div>
								<div className='w-full mt-5 lg:mt-11'>
									<input
										type='tel'
										placeholder='Your Phone '
										className='outline-none bg-transparent pb-4 border-b border-[#0f172a] w-full placeholder:text-[#0f172a] placeholder:font-light focus:border-sky-600 text-sky-600 font-medium'
									/>
								</div>
								<div className='w-full mt-5 lg:mt-11'>
									<textarea
										placeholder='Message *'
										rows={10}
										className='outline-none bg-transparent pb-4 border-b border-[#0f172a] w-full placeholder:text-[#0f172a] placeholder:font-light focus:border-sky-600 text-sky-800 font-medium'
									/>
								</div>
								<div className='w-full flex justify-center mt-14'>
									<button
										className={
											'bg-[#0f172a] hover:bg-[#192849] text-white py-3 px-10 rounded-full hover:shadow-lg duration-300 flex items-center gap-x-4'
										}
									>
										<span>Submit Now</span>
										<BsArrowRight />
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
