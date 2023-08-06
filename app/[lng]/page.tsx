/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image';

import { useTranslation } from '../i18n';
import { fallbackLng, languages } from '../i18n/settings';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Services from './components/Services';

export async function generateMetadata({ params: { lng } }: any) {
	const { t } = await useTranslation(lng, '');
	return {
		title: 'Gloire Mutaliko',
		description: 'FullStack developer and UI/UX Designer from Goma',
	};
}

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Hero />
			<Experience />
			<Services />
		</main>
	);
}
