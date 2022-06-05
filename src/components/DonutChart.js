import "../styles/donut.css";
const DonutChart = ({ solved, total }) => {
	return (
		<div className="skill">
			<div className="outer">
				<div className="inner"></div>
			</div>
			<svg
				id="donut"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width="160px"
				height="160px"
			>
				<circle
					cx="80"
					cy="80"
					r="70"
					fill="none"
					stroke="#438AF6"
					strokeWidth="10"
					strokeDasharray={`${472 - (472 - (7 / 15) * 472)}`}
				/>
			</svg>
		</div>
	);
};

export default DonutChart;
