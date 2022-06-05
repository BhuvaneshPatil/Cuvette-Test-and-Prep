import "../../styles/skillanalysis.css";
import { ANALYSIS } from "../../utils";
import SingleSyllabus from "../SingleSyllabus";
const SkillAnalysis = () => {
	return (
		<section className="syllabusAnalysis_container">
			<h3 className="syllabusAnalysis_header">Syllabus wise Analysis</h3>
			{ANALYSIS.map((item) => (
				<SingleSyllabus data={item} key={item.id} />
			))}
		</section>
	);
};

export default SkillAnalysis;
