// HOC for page content (below Navbar)
import "../styles/pagecontent.css";
const PageContent = ({ children }) => {
	return <div className="page_container">{children}</div>;
};

export default PageContent;
