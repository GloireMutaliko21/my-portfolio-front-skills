'use client';

import { useRef, useState } from 'react';
import Joi from 'joi';
import emailjs from '@emailjs/browser';
import { BsArrowRight } from 'react-icons/bs';
import { PiPhoneCallBold } from 'react-icons/pi';
import { TfiEmail } from 'react-icons/tfi';
import { ImGithub, ImWarning } from 'react-icons/im';

const Contact = () => {
	const form: any = useRef();
	const inputName: any = useRef<HTMLInputElement | undefined>();
	const inputEmail: any = useRef<HTMLInputElement>();
	const inputMessage: any = useRef<HTMLInputElement>();

	// useRef Span
	const [spanName, setSpanName] = useState<string | null>(null);
	const [spanEmail, setSpanEmail] = useState<string | null>(null);
	const [spanMessage, setSpanMessage] = useState<string | null>(null);

	// schema form
	const schemaForm = Joi.object({
		name: Joi.string().trim().required().min(2).max(30).messages({
			'string.min': ' Name too short',
			'string.max': ' Name too long',
			'string.empty': ' Please, provide your name',
			'string.pattern.base': ' Invalid Name',
		}),
		email: Joi.string()
			.trim()
			.min(5)
			.max(30)
			.email({ tlds: { allow: false } })
			.messages({
				'string.min': ' Email too short',
				'string.max': ' Email too long',
				'string.empty': ' Please, provide your email address',
				'string.pattern.base': ' Invalid email address',
			}),
		message: Joi.string().trim().required().min(10).max(400).messages({
			'string.min': '  Le message too short',
			'string.max': ' Le message est too long',
			'string.empty': ' Could not send with empty message',
			'string.pattern.base': ' Invalid message',
		}),
	}).options({ abortEarly: false });

	const onChange = () => {
		setSpanName(null);
		setSpanEmail(null);
		setSpanMessage(null);
	};

	// Validate form
	const validated = () => {
		const res = schemaForm.validate({
			name: inputName.current!.value,
			email: inputEmail.current!.value,
			message: inputMessage.current!.value,
		});
		console.log(res);

		if (res.error) {
			res.error.details.forEach((item) => {
				switch (item.context!.label) {
					case 'name':
						setSpanName(item.message);
						break;
					case 'email':
						setSpanEmail(item.message);
						break;
					case 'message':
						setSpanMessage(item.message);
						break;
				}
			});
		}
		return res;
	};

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (validated().error) return;

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID!,
				process.env.NEXT_PUBLIC_TEMPLATE_ID!,
				form.current!,
				process.env.NEXT_PUBLIC_PUBLIC_KEY
			)
			.then(
				(result) => {
					inputName.current!.value = '';
					inputEmail.current!.value = '';
					inputMessage.current!.value = '';
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<section className='py-5 w-full px-2 md:px-10 lg:px-16 xl:px-20 2xl:px-72 text-[#0f172a] mb-48 lg:mb-28'>
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
					<div className='lg:col-span-2 rounded border bg-slate-100 p-7 lg:px-28'>
						<h1 className='text-3xl font-extrabold mb-7'>Get In Touch</h1>
						<div>
							<form ref={form} onSubmit={sendEmail} className='w-full'>
								<div className='w-full flex gap-6'>
									<div className='w-full lg:w-[50%]'>
										<input
											type='text'
											placeholder='Your Name *'
											name='user_name'
											className='outline-none bg-transparent pb-4 border-b border-[#0f172a] w-full placeholder:text-[#0f172a] placeholder:font-light focus:border-sky-600 text-sky-600 font-medium'
											ref={inputName}
											onChange={onChange}
										/>
										{spanName && (
											<span className=' text-xs text-red-700 flex gap-2 my-1 items-center ml-3'>
												<ImWarning />
												{spanName}
											</span>
										)}
									</div>
									<div className='w-full lg:w-[50%]'>
										<input
											type='email'
											name='user_mail'
											placeholder='Your Email *'
											className='outline-none bg-transparent pb-4 border-b border-[#0f172a] w-full placeholder:text-[#0f172a] placeholder:font-light focus:border-sky-600 text-sky-600 font-medium'
											ref={inputEmail}
											onChange={onChange}
										/>
										{spanEmail && (
											<span className=' text-xs text-red-700 flex gap-2 my-1 items-center ml-3'>
												<ImWarning />
												{spanEmail}
											</span>
										)}
									</div>
								</div>
								<div className='w-full mt-5 lg:mt-11'>
									<input
										type='tel'
										name='user_phone'
										placeholder='Your Phone '
										className='outline-none bg-transparent pb-4 border-b border-[#0f172a] w-full placeholder:text-[#0f172a] placeholder:font-light focus:border-sky-600 text-sky-600 font-medium'
									/>
								</div>
								<div className='w-full mt-5 lg:mt-11'>
									<textarea
										placeholder='Message *'
										name='message'
										rows={10}
										className='outline-none bg-transparent pb-4 border-b border-[#0f172a] w-full placeholder:text-[#0f172a] placeholder:font-light focus:border-sky-600 text-sky-800 font-medium'
										ref={inputMessage}
										onChange={onChange}
									/>
									{spanMessage && (
										<span className=' text-xs text-red-700 flex gap-2 my-1 items-center ml-3'>
											<ImWarning />
											{spanMessage}
										</span>
									)}
								</div>
								<div className='w-full flex justify-center mt-12'>
									<button
										type='submit'
										className={
											'bg-[#0f172a] hover:cursor-pointer hover:bg-[#192849] text-white py-3 px-10 rounded-full hover:shadow-lg duration-300 flex items-center gap-x-4'
										}
									>
										<span>Submit Now</span>
										<BsArrowRight />
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className='grid col-span-1 gap-y-7 text-start'>
						<div className='p-6 lg:px-14 w-full rounded border bg-slate-100'>
							<h1 className='font-bold text-2xl mb-5'>mufunyig@gmail.com</h1>
							<div className='flex w-full justify-between items-center'>
								<div className='w-24 h-24 rounded-full flex justify-center items-center p-2 bg-slate-200'>
									<TfiEmail className='text-5xl text-sky-500' />
								</div>
								<p>My Official Email Address</p>
							</div>
						</div>
						<div className='p-6 lg:px-14 w-full rounded border bg-slate-100'>
							<h1 className='font-bold text-2xl mb-5'>+243 970 987 018</h1>
							<div className='flex w-full justify-between items-center'>
								<div className='w-24 h-24 rounded-full flex justify-center items-center p-2 bg-slate-200'>
									<PiPhoneCallBold className='text-5xl text-sky-500' />
								</div>
								<p>My Official Phone Number</p>
							</div>
						</div>
						<div className='p-6 lg:px-14 w-full rounded border bg-slate-100'>
							<h1 className='font-bold text-2xl mb-5'>GloireMutaliko21</h1>
							<div className='flex w-full justify-between items-center'>
								<div className='w-24 h-24 rounded-full flex justify-center items-center p-2 bg-slate-200'>
									<ImGithub className='text-5xl text-sky-500' />
								</div>
								<p>My Github Profile</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
