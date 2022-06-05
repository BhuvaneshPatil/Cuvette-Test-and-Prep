import "../styles/button.css";
const Button = ({ children, onClick, outline, extraStyles, isDisabled }) => {
	return (
		<button
			className={`btn btn-primary ${outline ? "outline" : "filled"}`}
			style={extraStyles}
			disabled={isDisabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
