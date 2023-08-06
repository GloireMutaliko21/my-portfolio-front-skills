import {
	TbDeviceDesktopCode,
	TbDeviceImacCog,
	TbDeviceMobileCog,
} from 'react-icons/tb';

const DevServices = () => {
	return (
		<section className='flex gap-5 justify-center mt-16 duration-300'>
			{/* Web dev */}
			<div className='border rounded-2xl scale-95 hover:scale-100 duration-500 p-12 px-8 bg-slate-100 group/main'>
				<div className='w-full flex justify-center'>
					<div className='bg-slate-200 group-hover/main:bg-[#0f172a] h-32 w-32 rounded-full p-4 flex justify-center items-center'>
						<TbDeviceImacCog className='text-7xl text-[#0f172a] group-hover/main:text-white' />
					</div>
				</div>
				<div className='text-center my-7'>
					<h1 className='text-3xl font-extrabold'>Web Development</h1>
					<p className='max-w-[320px] mt-5'>
						Every line of code is meticulously thought out to provide a smooth
						user experience and aesthetic interface
					</p>
				</div>
				<div>
					<button className='bg-sky-700 hover:bg-sky-600 text-white py-2 px-12 rounded-full hover:shadow-lg duration-300 font-semibold'>
						Explore
					</button>
				</div>
			</div>
			{/* Mobile dev */}
			<div className='border rounded-2xl scale-95 hover:scale-100 duration-500 p-12 px-8 bg-slate-100 group/main'>
				<div className='w-full flex justify-center'>
					<div className='bg-slate-200 group-hover/main:bg-[#0f172a] h-32 w-32 rounded-full p-4 flex justify-center items-center'>
						<TbDeviceMobileCog className='text-7xl text-[#0f172a] group-hover/main:text-white' />
					</div>
				</div>
				<div className='text-center my-7'>
					<h1 className='text-3xl font-extrabold'>Mobile Development</h1>
					<p className='max-w-[320px] mt-5'>
						Discover mobile apps, where innovation and user-friendliness come
						together to meet the needs of your users
					</p>
				</div>
				<div>
					<button className='bg-sky-700 hover:bg-sky-600 text-white py-2 px-12 rounded-full hover:shadow-lg duration-300 font-semibold'>
						Explore
					</button>
				</div>
			</div>
			{/* Desktop dev */}
			<div className='border rounded-2xl scale-95 hover:scale-100 duration-500 p-12 px-8 bg-slate-100 group/main'>
				<div className='w-full flex justify-center'>
					<div className='bg-slate-200 group-hover/main:bg-[#0f172a] h-32 w-32 rounded-full p-4 flex justify-center items-center'>
						<TbDeviceDesktopCode className='text-7xl text-[#0f172a] group-hover/main:text-white' />
					</div>
				</div>
				<div className='text-center my-7'>
					<h1 className='text-3xl font-extrabold'>Desktop Development</h1>
					<p className='max-w-[320px] mt-5'>
						I design intuitive and robust software for Windows, macOS and Linux,
						Enjoy it together.
					</p>
				</div>
				<div>
					<button className='bg-sky-700 hover:bg-sky-600 text-white py-2 px-12 rounded-full hover:shadow-lg duration-300 font-semibold'>
						Explore
					</button>
				</div>
			</div>
		</section>
	);
};

export default DevServices;
