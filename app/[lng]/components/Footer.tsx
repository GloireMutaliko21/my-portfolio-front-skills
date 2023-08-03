'use client';

import { useTranslation } from '@/app/i18n/client';

const Footer = ({ lng }: any) => {
	const { t } = useTranslation(lng, 'footer', {});
	return <footer>Footer</footer>;
};

export default Footer;
