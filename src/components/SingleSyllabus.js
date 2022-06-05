const SingleSyllabus = ({ data }) => {
	return (
		<div className="singleSyllabus_container">
			{/* Text */}
			<p className="singleSyllabus_title secondary_text">{data.title}</p>
			<div className="singleSyllabus_progress">
				{/* Performance and in number */}
				<div
					className="progress_outer"
					style={{ backgroundColor: `${data.color}10` }}
				>
					<div
						className="progress_outer width_anim"
						style={{
							backgroundColor: data.color,
							width: `${data.value}%`,
						}}
					></div>
				</div>
				<p style={{ color: data.color }}>{`${data.value}%`}</p>
			</div>
		</div>
	);
};

export default SingleSyllabus;
