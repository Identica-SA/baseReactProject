import styles from "./Loader.module.scss";

const Loader = ({ loaderSize = 60 }) => {
	return (
		<div
			className={styles.loader}
			style={{ width: loaderSize, height: loaderSize }}
		>
			<div
				className={styles.spinner}
				style={{ width: loaderSize, height: loaderSize }}
			></div>
		</div>
	);
};

export default Loader;
