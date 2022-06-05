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
import annotationPlugin from "chartjs-plugin-annotation";

import { Line } from "react-chartjs-2";
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	annotationPlugin
);

const fakePercentile = [
	8, 5, 73, 51, 92, 10, 49, 99, 41, 25, 20, 52, 69, 80, 98, 100,
];
const ComparisonGraph = ({ data }) => {
	const perLine = (data / 20) * 3;
	const boxXMin = (((data / 20) * 3) % 2) * 2;
	const boxMax = boxXMin + 3;
	console.log(boxXMin, boxMax);
	return (
		<div className="comparisonGraph_container">
			<div className="comparisonGraph_heading_container">
				<div className="heading_text_part">
					<h3 className="primary_text">Comparison Graph</h3>
					<p className="secondary_text">
						<span>{`You scored ${data}% percentile`}</span>
						{` which is ${
							data > 72 ? "greater" : "less"
						} than the average percentile 72% of
						all the engineers who took this assessment`}
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
							annotation: {
								annotations: {
									line1: {
										type: "line",
										xMin: 11.5,
										xMax: 11.5,
										borderColor: "#FF9142",
										borderWidth: 2,
										borderDash: [6, 15],
									},
									line2: {
										type: "line",
										xMin: perLine,
										xMax: perLine,
										borderColor: "#438AF6",
										borderWidth: 2,
										borderDash: [6, 15],
									},
								},
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
