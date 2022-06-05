import React from "react";
import "../../styles/quickstat.css";
// emoji
const IconContainer = ({ emoji }) => {
	return <div className="icon_container">{emoji}</div>;
};

const QuickStats = ({ data }) => {
	return (
		<div className="quickStat_container">
			<h3 className="quickStat_header">Quick Statistics</h3>
			<div className="numbers_container">
				<div className="stat_box">
					{/* Icon */}
					<IconContainer emoji={"🏆"} />
					<div className="text_section">
						{/* Text 
                - Number
                - Title
            */}
						<h2 className="primary_text">
							{data.rank.toLocaleString()}
						</h2>
						<p className="lightGray_text">Your Rank</p>
					</div>
				</div>
				<div className="stat_box stat_box_borders">
					{/* Icon */}
					<IconContainer emoji={"📋"} />
					<div className="text_section">
						{/* Text 
                - Number
                - Title
            */}
						<h2 className="primary_text">{`${data.percentile}%`}</h2>
						<p className="lightGray_text">Percentile</p>
					</div>
				</div>
				<div className="stat_box">
					{/* Icon */}
					<IconContainer emoji={"✅"} />
					<div className="text_section">
						{/* Text 
                - Number
                - Title
            */}
						<h2 className="primary_text">{`${(
							"0" + data.score
						).slice(-2)}/15`}</h2>
						<p className="lightGray_text">Correct Answers</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuickStats;
