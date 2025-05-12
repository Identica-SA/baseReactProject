import Typography from "../Typography/Typography";
import styles from "./Button.module.scss";

const Button = ({ children, onClick, type = "", style, className = "" }) => {
	return (
		<button
			className={`${styles.buttonContainer} ${className}`}
			onClick={onClick}
			style={style}
			type={type}
		>
			<Typography color="white" variant="h6">
				{children}
			</Typography>
		</button>
	);
};

export default Button;
