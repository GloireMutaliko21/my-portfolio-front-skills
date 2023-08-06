const SocialMedia = ({
	label,
	icon,
	externalLink,
}: {
	label: string;
	icon: any;
	externalLink: string;
}) => {
	return (
		<a href={externalLink} target='_blank' className='mx-5 lg:mx-3'>
			<div className='border border-white/70 text-sm text-white rounded-full justify-center py-2 px-3 flex items-center gap-2 hover:bg-[#1e2a48]'>
				<div className='text-base'>{icon}</div>
				<div>{label}</div>
			</div>
		</a>
	);
};

export default SocialMedia;
