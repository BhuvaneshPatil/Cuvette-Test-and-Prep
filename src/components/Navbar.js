import "../styles/navbar.css";
import logo from "../assets/images/logo.svg";
import avatarImage from "../assets/images/avatar.png";
const Navbar = () => {
	return (
		<div className="navbar_container">
			<nav className="navbar">
				{/* Logo */}
				<img src={logo} alt="Logo" />
				{/* User avatar Section */}
				<div className="user_profile">
					<img src={avatarImage} alt="Avatar" />
					<h3 className="username primary_text">Siddharth Jain</h3>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
