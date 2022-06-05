import { useState } from "react";
import {
	ComparisonGraph,
	Modal,
	QuestionAnalysis,
	SkillInfo,
} from "../components";
import QuickStats from "../components/SkillTest/QuickStats";
import SkillAnalysis from "../components/SkillTest/SkillAnalysis";
import "../styles/skilltest.css";
import { SKILL_INFO } from "../utils";
const INITIAL_STATE = { rank: 12002, percentile: 37, score: 7 };
const SkillTest = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [appState, setAppState] = useState({ ...INITIAL_STATE });
	const handleStateChange = (comingState) => {
		setAppState({ ...appState, ...comingState });
	};
	return (
		<div className="skilltest_container">
			{/* Small Heading */}
			<small className="secondary_text">Skill Test</small>
			<div className="page_parts">
				<div className="content_left">
					<SkillInfo
						skill={SKILL_INFO}
						modalStateChange={setModalOpen}
					/>
					<QuickStats data={appState} />
					<ComparisonGraph data={appState.percentile} />
				</div>
				<div className="content_right">
					<SkillAnalysis />
					<QuestionAnalysis data={appState.score} />
				</div>
			</div>
			<Modal
				show={modalOpen}
				handleClose={() => setModalOpen(false)}
				updateState={handleStateChange}
				appState={appState}
			/>
		</div>
	);
};

export default SkillTest;
