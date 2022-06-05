import { FaRegFile, FaAward, FaChartBar } from "react-icons/fa";
const commonStyles = { size: 20, className: "react-icons" };
export const LINKS = [
	{
		id: 1,
		target: "dashboard",
		icon: <FaChartBar {...commonStyles} />,
		linkText: "Dashboard",
	},
	{
		id: 2,
		target: "skillTest",
		icon: <FaAward {...commonStyles} />,
		linkText: "Skill Test",
	},
	{
		id: 3,
		target: "internships",
		icon: <FaRegFile {...commonStyles} />,
		linkText: "Internships",
	},
];
