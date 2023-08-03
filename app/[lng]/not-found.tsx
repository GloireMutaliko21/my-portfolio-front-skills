import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
	return (
		<section className='h-screen flex justify-center items-center flex-col'>
			<div className='w-96 h-96'>
				<Image
					src='/not-found.png'
					alt='Page Not Found'
					width={500}
					height={500}
					className='w-full h-full'
				/>
				<div className='flex justify-center'>
					<Link
						href='/'
						className='py-4 px-10 rounded-xl shadow hover:shadow-xl duration-300 text-primary-700 font-medium bg-[#ffcbc3] hover:bg-[#ffd8d2] text-center'
					>
						<span>Retourner à l&apos;accueil</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
