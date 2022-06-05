import "../styles/sidebar.css";
import { LINKS } from "../utils";
import SidebarLink from "./SidebarLink";
const Sidebar = () => {
	return (
		<aside className="sidebar_container">
			<div className="sidebar_outer">
				<div className="sidebar_inner">
					<ul>
						{LINKS.map((item) => {
							return (
								<li>
									<SidebarLink
										key={item.id}
										data={item}
										isActive={item.target === "skillTest"}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
