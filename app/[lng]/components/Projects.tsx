import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { PiArrowSquareOutThin } from 'react-icons/pi';
import {
	SiAntdesign,
	SiCreatereactapp,
	SiExpress,
	SiFigma,
	SiMysql,
	SiNestjs,
	SiNextdotjs,
	SiPostgresql,
	SiPrisma,
	SiRedux,
	SiTailwindcss,
} from 'react-icons/si';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';

const Projects = () => {
	return (
		<section className='py-5 w-full px-2 md:px-10 lg:px-16 xl:px-20 2xl:px-72 text-[#0f172a] mb-10 lg:mb-28'>
			<div className='text-center lg:text-start'>
				<div className='flex justify-between items-center'>
					<div>
						<h1 className='text-5xl font-extrabold mb-7 mt-10 lg:mt-0'>
							Recent projects
						</h1>
						<div className='flex justify-start items-start'>
							<p className='w-90 xl:w-[400px]'>
								Take a look at some of my recent achievements, and let me know
								if you have any suggestions for improvement or encouragement.
							</p>
						</div>
					</div>
					<div className='bg-transparent border rounded-full w-44 h-44 p-2'>
						<div className='bg-slate-100 p-5 rounded-full flex justify-center items-center w-full h-full'>
							<AiOutlineFundProjectionScreen className='text-8xl text-sky-700' />
						</div>
					</div>
				</div>

				<div className='grid md:grid-cols-2 xl:grid-cols-3 mt-10 gap-5'>
					<div className='w-full shadow-md border-t-2 border-sky-800 bg-transparent hover:bg-slate-100 duration-300 flex flex-col group/main'>
						<div className='cursor-pointer'>
							<div className='w-full h-72 border-b-2 bg-[url("/images/projects/w-trans.jpg")] bg-cover'>
								<div className='w-full h-full bg-black/20'></div>
							</div>
							<div className='w-full p-5 flex justify-between items-end'>
								<div>
									<p className='text-2xl font-semibold text-neutral'>
										Agency Landing page
									</p>
								</div>
							</div>
							<div className='w-full flex justify-between items-end p-5 pt-0 mb-3'>
								<div className='flex gap-3 items-center justify-start mt-5'>
									<div className='flex items-center gap-1'>
										<FaReact className='text-sky-500 text-xl' />
										<span className='font-medium text-sm'>React.js</span>
									</div>
									<div className='flex items-center gap-1'>
										<SiTailwindcss className='text-sky-600 text-xl' />
										<span className='font-medium text-sm'>Tailwindcss</span>
									</div>
								</div>
								<a
									href='https://wastes-transformation.netlify.app/'
									target='_blank'
								>
									<button className='border group-hover/main:bg-white border-sky-600 py-1 px-5 rounded group-hover/main:shadow-lg duration-300 font-medium flex gap-2 items-center text-sky-600'>
										<span>Visit</span>
										<PiArrowSquareOutThin />
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className='w-full shadow-md border-t-2 border-sky-800 bg-transparent hover:bg-slate-100 duration-300 flex flex-col group/main'>
						<div className='cursor-pointer'>
							<div className='w-full h-72 border-b-2 bg-[url("/images/projects/spotify.jpg")] bg-cover'>
								<div className='w-full h-full bg-black/20'></div>
							</div>
							<div className='w-full p-5 flex justify-between items-end'>
								<div>
									<p className='text-2xl font-semibold text-neutral'>
										Music player - Spotify API
									</p>
								</div>
							</div>
							<div className='w-full flex justify-between items-end p-5 pt-0 mb-3'>
								<div className='flex gap-3 items-center justify-start mt-5'>
									<div className='flex items-center gap-1'>
										<FaReact className='text-sky-500 text-xl' />
										<span className='font-medium text-sm'>React.js</span>
									</div>
									<div className='flex items-center gap-1'>
										<SiTailwindcss className='text-sky-600 text-xl' />
										<span className='font-medium text-sm'>Tailwindcss</span>
									</div>
								</div>
								<a href='https://spotify-app-gda.netlify.app/' target='_blank'>
									<button className='border group-hover/main:bg-white border-sky-600 py-1 px-5 rounded group-hover/main:shadow-lg duration-300 font-medium flex gap-2 items-center text-sky-600'>
										<span>Visit</span>
										<PiArrowSquareOutThin />
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className='w-full shadow-md border-t-2 border-sky-800 bg-transparent hover:bg-slate-100 duration-300 flex flex-col group/main'>
						<div className='cursor-pointer'>
							<div className='w-full h-72 border-b-2 bg-[url("/images/projects/figma.jpg")] bg-contain'>
								<div className='w-full h-full bg-black/20'></div>
							</div>
							<div className='w-full p-5 flex justify-between items-end'>
								<div>
									<p className='text-2xl font-semibold text-neutral'>
										Agency Landing page and Blog
									</p>
								</div>
							</div>
							<div className='w-full flex justify-between items-end p-5 pt-0 mb-3'>
								<div className='flex gap-3 items-center justify-start mt-5'>
									<div className='flex items-center gap-1'>
										<SiFigma className='text-pink-400 text-xl' />
										<span className='font-medium text-sm'>Figma</span>
									</div>
								</div>
								<a
									href='https://www.figma.com/proto/gwLgGU1KekInUjzM2NzYh3/Projet-GDA-Students?type=design&node-id=192-2940&t=cHRRu8KNa4ZCXZ6C-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=192%3A2940&show-proto-sidebar=1'
									target='_blank'
								>
									<button className='border group-hover/main:bg-white border-sky-600 py-1 px-5 rounded group-hover/main:shadow-lg duration-300 font-medium flex gap-2 items-center text-sky-600'>
										<span>Visit</span>
										<PiArrowSquareOutThin />
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className='w-full shadow-md border-t-2 border-sky-800 bg-transparent hover:bg-slate-100 duration-300 flex flex-col group/main'>
						<div className='cursor-pointer'>
							<div className='w-full h-72 border-b-2 bg-[url("/images/projects/appatete.jpg")] bg-contain'>
								<div className='w-full h-full bg-black/20'></div>
							</div>
							<div className='w-full p-5 flex justify-between items-end'>
								<div>
									<p className='text-2xl font-semibold text-neutral'>
										Company management System
									</p>
								</div>
							</div>
							<div className='w-full flex justify-between items-end p-5 pt-0 mb-3'>
								<div className='grid grid-cols-2 gap-3 mt-5'>
									<div className='flex items-center gap-1'>
										<FaReact className='text-sky-500 text-xl' />
										<span className='font-medium text-sm'>React.js</span>
									</div>
									<div className='flex items-center gap-1'>
										<SiTailwindcss className='text-sky-600 text-xl' />
										<span className='font-medium text-sm'>Tailwindcss</span>
									</div>
									<div className='flex items-center gap-1'>
										<SiAntdesign className='text-indigo-500 text-xl' />
										<span className='font-medium text-sm'>Antd</span>
									</div>
									<div className='flex items-center gap-1'>
										<SiRedux className='text-violet-700 text-xl' />
										<span className='font-medium text-sm'>Redux TK</span>
									</div>
									<div className='flex items-center gap-1'>
										<SiExpress className='text-blue-700 text-xl' />
										<span className='font-medium text-sm'>Express.js</span>
									</div>
									<div className='flex items-center gap-1'>
										<SiPostgresql className='text-cyan-700 text-xl' />
										<span className='font-medium text-sm'>Postgres</span>
									</div>
								</div>
								<a href='https://app.adminatete.com' target='_blank'>
									<button className='border group-hover/main:bg-white border-sky-600 py-1 px-5 rounded group-hover/main:shadow-lg duration-300 font-medium flex gap-2 items-center text-sky-600'>
										<span>Visit</span>
										<PiArrowSquareOutThin />
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className='w-full shadow-md border-t-2 border-sky-800 bg-transparent hover:bg-slate-100 duration-300 flex flex-col group/main'>
						<div className='cursor-pointer'>
							<div className='w-full h-72 border-b-2 bg-[url("/images/projects/elbamu.jpg")] bg-cover'>
								<div className='w-full h-full bg-black/20'></div>
							</div>
							<div className='w-full p-5 flex justify-between items-end'>
								<div>
									<p className='text-2xl font-semibold text-neutral'>
										Wholesale management App
									</p>
								</div>
							</div>
							<div className='w-full flex justify-between items-end p-5 pt-0 mb-3'>
								<div className='grid grid-cols-2 gap-3 mt-5'>
									<div className='flex items-center gap-1'>
										<FaReact className='text-sky-500 text-xl' />
										<span className='font-medium text-sm'>React.js</span>
									</div>
									<div className='flex items-center gap-1'>
										<SiTailwindcss className='text-sky-600 text-xl' />
										<span className='font-medium text-sm'>Tailwindcss</span>
									</div>
									<div className='flex items-center gap-1'>
										<TfiLayoutGrid3Alt className='text-indigo-900 text-lg' />
										<span className='font-medium text-sm'>Syncfusion</span>
									</div>
									<div className='flex items-center gap-1'>
										<SiCreatereactapp className='text-violet-700 text-xl' />
										<span className='font-medium text-sm'>Context API</span>
									</div>
									<div className='flex items-center gap-1'>
										<SiExpress className='text-blue-700 text-xl' />
										<span className='font-medium text-sm'>Express.js</span>
									</div>
									<div className='flex items-center gap-1'>
										<SiMysql className='text-orange-600 text-2xl' />
										<span className='font-medium text-sm'>MySQL</span>
									</div>
								</div>
								<a href='https://el-bamu.com' target='_blank'>
									<button className='border group-hover/main:bg-white border-sky-600 py-1 px-5 rounded group-hover/main:shadow-lg duration-300 font-medium flex gap-2 items-center text-sky-600'>
										<span>Visit</span>
										<PiArrowSquareOutThin />
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className='w-full shadow-md border-t-2 border-sky-800 bg-transparent hover:bg-slate-100 duration-300 flex flex-col group/main'>
						<div className='cursor-pointer'>
							<div className='w-full h-72 border-b-2 bg-[url("/images/projects/adminatete.jpg")] bg-cover'>
								<div className='w-full h-full bg-black/20'></div>
							</div>
							<div className='w-full p-5 flex justify-between items-end'>
								<div>
									<p className='text-2xl font-semibold text-neutral'>
										Vitrine Site and E-Commerce
									</p>
								</div>
							</div>
							<div className='w-full flex justify-between items-end p-5 pt-0 mb-3'>
								<div className='grid grid-cols-2 gap-3 mt-5'>
									<div className='flex items-center gap-1'>
										<SiNextdotjs className='text-black text-xl' />
										<span className='font-medium text-sm'>Next.js</span>
									</div>
									<div className='flex items-center gap-1'>
										<SiTailwindcss className='text-sky-600 text-xl' />
										<span className='font-medium text-sm'>Tailwindcss</span>
									</div>
									<div className='flex items-center gap-1'>
										<SiAntdesign className='text-indigo-500 text-xl' />
										<span className='font-medium text-sm'>Antd</span>
									</div>
									<div className='flex items-center gap-1'>
										<SiRedux className='text-violet-700 text-xl' />
										<span className='font-medium text-sm'>Redux TK</span>
									</div>
									<div className='flex items-center gap-1'>
										<SiNestjs className='text-red-500 text-xl' />
										<span className='font-medium text-sm'>Nest.js</span>
									</div>
									<div className='flex items-center gap-1'>
										<SiPrisma className='text-slate-800 text-xl' />
										<span className='font-medium text-sm'>Prisma</span>
									</div>
								</div>
								<a href='https://home-adminatete.vercel.app/fr' target='_blank'>
									<button className='border group-hover/main:bg-white border-sky-600 py-1 px-5 rounded group-hover/main:shadow-lg duration-300 font-medium flex gap-2 items-center text-sky-600'>
										<span>Visit</span>
										<PiArrowSquareOutThin />
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='w-full flex justify-center items-center my-14'>
					<div className='h-3 w-[40%] rounded-full bg-[#0f172a]'></div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
