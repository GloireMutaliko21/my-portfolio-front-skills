import { PiPaintBucket } from 'react-icons/pi';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { TbUserSearch } from 'react-icons/tb';

const DesignServices = () => {
	return (
		<section className='flex gap-5 justify-center mt-16 duration-300'>
			{/* UI/UX */}
			<div className='border rounded-2xl scale-95 hover:scale-100 duration-500 p-12 px-8 bg-slate-100 group/main'>
				<div className='w-full flex justify-center'>
					<div className='bg-slate-200 group-hover/main:bg-sky-600 h-32 w-32 rounded-full p-4 flex justify-center items-center'>
						<PiPaintBucket className='text-7xl text-sky-600 group-hover/main:text-white' />
					</div>
				</div>
				<div className='text-center my-7'>
					<h1 className='text-3xl font-extrabold'>UI/UX Design</h1>
					<p className='max-w-[320px] mt-5'>
						Discover my world of UI/UX design, where every pixel is passionately
						thought out to deliver memorable interactions.
					</p>
				</div>
				<div>
					<button className='bg-[#0f172a] hover:bg-[#192849] text-white py-2 px-12 rounded-full hover:shadow-lg duration-300 font-semibold'>
						Explore
					</button>
				</div>
			</div>
			{/* interactive prototypes */}
			<div className='border rounded-2xl scale-95 hover:scale-100 duration-500 p-12 px-8 bg-slate-100 group/main'>
				<div className='w-full flex justify-center'>
					<div className='bg-slate-200 group-hover/main:bg-sky-600 h-32 w-32 rounded-full p-4 flex justify-center items-center'>
						<AiOutlineAppstoreAdd className='text-7xl text-sky-600 group-hover/main:text-white' />
					</div>
				</div>
				<div className='text-center my-7'>
					<h1 className='text-3xl font-extrabold'>Interactive prototypes</h1>
					<p className='max-w-[320px] mt-5'>
						Interaction, where every gesture and every click is meticulously
						thought out to deliver an unrivalled UX.
					</p>
				</div>
				<div>
					<button className='bg-[#0f172a] hover:bg-[#192849] text-white py-2 px-12 rounded-full hover:shadow-lg duration-300 font-semibold'>
						Explore
					</button>
				</div>
			</div>

			{/* User search */}
			<div className='border rounded-2xl scale-95 hover:scale-100 duration-500 p-12 px-8 bg-slate-100 group/main'>
				<div className='w-full flex justify-center'>
					<div className='bg-slate-200 group-hover/main:bg-sky-600 h-32 w-32 rounded-full p-4 flex justify-center items-center'>
						<TbUserSearch className='text-7xl text-sky-600 group-hover/main:text-white' />
					</div>
				</div>
				<div className='text-center my-7'>
					<h1 className='text-3xl font-extrabold'>User search</h1>
					<p className='max-w-[320px] mt-5'>
						Using a variety of research methods, I identify the insights that
						will shape every design decision.
					</p>
				</div>
				<div>
					<button className='bg-[#0f172a] hover:bg-[#192849] text-white py-2 px-12 rounded-full hover:shadow-lg duration-300 font-semibold'>
						Explore
					</button>
				</div>
			</div>
		</section>
	);
};

export default DesignServices;
