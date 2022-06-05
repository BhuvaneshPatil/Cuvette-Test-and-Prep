import { useEffect } from "react";
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import "../styles/modal.css";
import { SKILL_INFO } from "../utils";
import Button from "./Button";

const buttonStyle = {
	height: "44px",
	width: "90px",
	padding: "8px",
};
const Modal = ({ show, handleClose, updateState, appState }) => {
	const [formData, setFormData] = useState({ ...appState });
	const [canSubmit, setCanSubmit] = useState(false);
	const handleFieldChange = (e) => {
		const { target } = e;
		setFormData({ ...formData, [target.name]: target.value });
	};
	const handleUpdate = () => {
		handleClose();
		updateState(formData);
	};
	if (!show) {
		return null;
	}
	return (
		<div className="modal">
			<div className="modal_content">
				<div className="modal_header">
					<div className="header_container">
						{/* name */}
						<h2 className="primary_text modal_heading">
							Update Details
						</h2>
						{/* Skill logo */}
						<img src={SKILL_INFO.logo} alt="Skill" />
					</div>
				</div>
				<div className="modal_body">
					<form>
						<div className="form_row">
							<div className="form_field_no">1</div>
							<div className="form_field_label secondary_text">
								Update your{" "}
								<span className="form_field_label_highlight">
									rank
								</span>
							</div>
							<input
								type="text"
								name="rank"
								className="form_input_field"
								onChange={handleFieldChange}
								value={formData.rank}
							/>
						</div>
						<div className="form_row">
							<div className="form_field_no">2</div>
							<div className="form_field_label secondary_text">
								Update your{" "}
								<span className="form_field_label_highlight">
									percentile
								</span>
							</div>
							<input
								type="text"
								name="percentile"
								className="form_input_field"
								onChange={handleFieldChange}
								value={formData.percentile}
							/>
						</div>
						<div className="form_row">
							<div className="form_field_no">3</div>
							<div className="form_field_label secondary_text">
								Update your{" "}
								<span className="form_field_label_highlight">
									current score (out of 15)
								</span>
							</div>
							<input
								type="text"
								name="score"
								className="form_input_field"
								onChange={handleFieldChange}
								value={formData.score}
							/>
						</div>
					</form>
				</div>
				<div className="modal_footer">
					<Button
						outline
						extraStyles={{ ...buttonStyle, marginRight: "1rem" }}
						onClick={handleClose}
					>
						Close
					</Button>
					<Button
						extraStyles={buttonStyle}
						disabled={!canSubmit}
						onClick={handleUpdate}
					>
						Update <BsArrowRightShort size={20} className="arr" />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
