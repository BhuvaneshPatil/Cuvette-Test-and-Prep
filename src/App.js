import { MainContent, Navbar, PageContent } from "./components";
import Sidebar from "./components/Sidebar";
import { SkillTest } from "./pages";

function App() {
	return (
		<div className="App">
			<Navbar />
			<PageContent>
				<Sidebar />
				<MainContent>
					<SkillTest />
				</MainContent>
			</PageContent>
		</div>
	);
}

export default App;
