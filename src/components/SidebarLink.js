const IconWrapper = ({ icon, isActive }) => {
	return (
		<div className={`icon_wrapper icon_${isActive ? "active" : ""}`}>
			{icon}
		</div>
	);
};

const SidebarLink = ({ data, isActive, onClick }) => {
	return (
		<div
			className={`sidebar_link_container ${
				isActive ? "sidebar_link_container_active" : ""
			}`}
		>
			{/* icon */}
			<IconWrapper icon={data.icon} isActive={isActive} />
			<p
				className={`sidebar_link_text ${
					isActive ? "blue_text" : "gray_text"
				}`}
			>
				{data.linkText}
			</p>
			{/* text */}
		</div>
	);
};

export default SidebarLink;
