import Button from "../Button";
import "../../styles/skillinfo.css";
const SkillInfo = ({ skill, modalStateChange }) => {
	return (
		<div className="skillInfo_container">
			{/* image */}
			<img src={skill.logo} alt="Skill" />
			{/* title
            heading
            short info
      */}
			<div className="skillInfo_text">
				<h5 className="heading dark_text">{skill.title}</h5>
				<p className="secondary_text subheading">{`Questions: ${skill.questions} | Duration: ${skill.duration} | Submitted on ${skill.submittedOn}`}</p>
			</div>
			{/* button */}
			<div className="btn_part">
				<Button onClick={() => modalStateChange((current) => !current)}>
					Update
				</Button>
			</div>
		</div>
	);
};
// export const SKILL_INFO = {
// 	title: "Hypertext Markup Language",
// 	questions: "08",
// 	duration: "15min",
// 	submittedOn: "5 June 2021",
// 	logo: skillImage,
// 	intialStatistics: {
// 		rank: 12890,
// 		percentile: 37,
// 		correctAnswers: 7,
// 	},
// };

export default SkillInfo;
