import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FullPath = ({ link = '', label }: { link: string; label: any }) => {
	const fullPath = usePathname();

	return (
		<Link
			href={`${fullPath.slice(0, 3)}/${link}`}
			className='duration-300 hover:translate-x-1'
		>
			{label}
		</Link>
	);
};

export default FullPath;
