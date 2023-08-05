'use client';

import { useTranslation } from '@/app/i18n/client';

const Footer = ({ lng }: any) => {
	const { t } = useTranslation(lng, 'footer', {});
	return (
		<footer className='py-5 xl:py-10 w-full mt-16 bg-black text-white px-2 md:px-10 lg:px-16 xl:px-20 2xl:px-72'>
			Footer
		</footer>
	);
};

export default Footer;
