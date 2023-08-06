import { PiPaintBucket } from 'react-icons/pi';

const DesignServices = () => {
	return (
		<section className='flex gap-5 justify-center mt-16 duration-300'>
			{/* UI/UX */}
			<div className='border rounded-2xl scale-95 hover:scale-100 duration-500 p-12 bg-slate-100'>
				<div className='bg-slate-200 h-36 w-36 rounded-full p-4 flex justify-center items-center'>
					<PiPaintBucket className='text-7xl' />
				</div>
			</div>
		</section>
	);
};

export default DesignServices;
