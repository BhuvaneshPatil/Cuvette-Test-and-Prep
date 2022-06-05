import "../../styles/questionanalysis.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const QuestionAnalysis = ({ data }) => {
	return (
		<section className="questionAnalysis_container primary_text">
			<div className="heading_container">
				<h3 className="questionAnalysis_header">Question Analysis</h3>
				<h3 className="score">{`${("0" + data).slice(-2)}/15`}</h3>
			</div>
			<p className="questionAnalysis_description secondary_text">
				<span style={{ fontWeight: "700" }}>
					{`You scored ${data} question correct out of 15.`}
				</span>
				&nbsp;However it still needs some improvements
			</p>
			<div className="chart_parent">
				<div className="questionChart_container">
					<h1 className="center_text">🎯</h1>
					<Doughnut
						options={{
							cutout: 60,
							responsive: true,
						}}
						data={{
							datasets: [
								{
									data: [data, 15 - data],
									backgroundColor: ["#438AF6", "#438AF61A"],
								},
							],
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default QuestionAnalysis;
