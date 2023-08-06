const ExperienceCard = ({
	label,
	percent,
	color,
	textColor,
}: {
	label: string;
	percent: string;
	color: string;
	textColor: string;
}) => {
	return (
		<div
			className={`bg-gradient-to-b ${color} px-1 pt-1 text-center rounded-2xl`}
		>
			<div className='bg-gradient-to-b from-slate-50 to-white p-7 py-10 rounded-2xl'>
				<p className='font-extrabold text-3xl mb-3'>{percent}</p>
				<p className={`${textColor}`}>{label}</p>
			</div>
		</div>
	);
};

export default ExperienceCard;
