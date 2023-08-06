import { PiFileSql } from 'react-icons/pi';
import { SiMongodb } from 'react-icons/si';
import { BsDiagram3Fill } from 'react-icons/bs';

const DbServices = () => {
	return (
		<section className='flex gap-5 justify-center mt-16 duration-300'>
			{/* SQL */}
			<div className='border rounded-2xl scale-95 hover:scale-100 duration-500 p-12 px-8 bg-slate-100 group/main'>
				<div className='w-full flex justify-center'>
					<div className='bg-slate-200 group-hover/main:bg-teal-500 h-32 w-32 rounded-full p-4 flex justify-center items-center'>
						<PiFileSql className='text-7xl text-teal-600 group-hover/main:text-white' />
					</div>
				</div>
				<div className='text-center my-7'>
					<h1 className='text-3xl font-extrabold'>SQL</h1>
					<p className='max-w-[320px] mt-5'>
						Put my skills in Postgres, MySql, SQL Server and database management
						to work for you.
					</p>
				</div>
				<div>
					<button className='bg-teal-600 hover:bg-teal-500 text-white py-2 px-12 rounded-full hover:shadow-lg duration-300 font-semibold'>
						Explore
					</button>
				</div>
			</div>
			{/* NoSQL */}
			<div className='border rounded-2xl scale-95 hover:scale-100 duration-500 p-12 px-8 bg-slate-100 group/main'>
				<div className='w-full flex justify-center'>
					<div className='bg-slate-200 group-hover/main:bg-teal-500 h-32 w-32 rounded-full p-4 flex justify-center items-center'>
						<SiMongodb className='text-7xl text-teal-600 group-hover/main:text-white' />
					</div>
				</div>
				<div className='text-center my-7'>
					<h1 className='text-3xl font-extrabold'>NoSQL</h1>
					<p className='max-w-[320px] mt-5'>
						Grâce au NoSQL, je peux manipuler des données non structurées ou
						semi-structurées avec une efficacité accrue.
					</p>
				</div>
				<div>
					<button className='bg-teal-600 hover:bg-teal-500 text-white py-2 px-12 rounded-full hover:shadow-lg duration-300 font-semibold'>
						Explore
					</button>
				</div>
			</div>
			{/* UML */}
			<div className='border rounded-2xl scale-95 hover:scale-100 duration-500 p-12 px-8 bg-slate-100 group/main'>
				<div className='w-full flex justify-center'>
					<div className='bg-slate-200 group-hover/main:bg-teal-500 h-32 w-32 rounded-full p-4 flex justify-center items-center'>
						<BsDiagram3Fill className='text-7xl text-teal-600 group-hover/main:text-white' />
					</div>
				</div>
				<div className='text-center my-7'>
					<h1 className='text-3xl font-extrabold'>UML</h1>
					<p className='max-w-[320px] mt-5'>
						I translate abstract concepts into clear, structured diagrams,
						providing a complete overview of your project.
					</p>
				</div>
				<div>
					<button className='bg-teal-600 hover:bg-teal-500 text-white py-2 px-12 rounded-full hover:shadow-lg duration-300 font-semibold'>
						Explore
					</button>
				</div>
			</div>
		</section>
	);
};

export default DbServices;
