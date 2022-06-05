import "../../styles/comparisongraph.css";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const fakePercentile = [
	8, 5, 73, 51, 92, 10, 49, 99, 41, 25, 20, 52, 69, 80, 98, 100,
];
const ComparisonGraph = ({ data }) => {
	return (
		<div className="comparisonGraph_container">
			<div className="comparisonGraph_heading_container">
				<div className="heading_text_part">
					<h3 className="primary_text">Comparison Graph</h3>
					<p className="secondary_text">
						<span>{`You scored ${data}% percentile`}</span>
						&nbsp;which is lower than the average percentile 72% of
						all the engineers who took this assessment
					</p>
				</div>
				<div className="icon">📈</div>
			</div>
			<div className="chart_container">
				<Line
					options={{
						plugins: {
							legend: {
								display: false,
							},
						},
						tension: 0.4,
						scales: {
							x: {
								grid: {
									display: false,
								},
								beginAtZero: true,
								ticks: {
									callback: (value) => `${(value / 3) * 20}%`,
									maxTicksLimit: 6,
								},
							},
							y: {
								grid: {
									drawBorder: false,
									display: false,
								},
								ticks: {
									display: false,
								},
							},
						},
					}}
					data={{
						labels: fakePercentile,
						datasets: [{ data: fakePercentile }],
					}}
				/>
			</div>
		</div>
	);
};

export default ComparisonGraph;
