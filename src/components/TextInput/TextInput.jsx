import styles from "./TextInput.module.scss";

import { palette } from "../../theme/theme";

const TextInput = (props) => {
	const { type, style, error, onChange, setError, className, placeholder } =
		props;

	const handleError = () => {
		if (error) return `2px solid ${palette.error.main}`;
		else return `2px solid ${palette.primary.main}`;
	};

	return (
		<div
			className={`${styles.textInputcontainer} ${className}`}
			style={{ border: handleError(), ...style }}
		>
			<input
				className={styles.textInput}
				placeholder={placeholder}
				type={type}
				onFocus={(e) => {
					e.target.placeholder = "";
					setError(false);
				}}
				onBlur={(e) => (e.target.placeholder = placeholder)}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};

export default TextInput;
