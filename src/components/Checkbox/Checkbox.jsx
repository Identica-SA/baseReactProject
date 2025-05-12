import Typography from "../Typography/Typography";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ label = "", onChange, disabled, className = "" }) => {
	return (
		<div className={`${styles.checkboxContainer} ${className}`}>
			<input type="checkbox" onChange={onChange} disabled={disabled} />
			<Typography>{label}</Typography>
		</div>
	);
};

export default Checkbox;
