import styles from "./Landing.module.scss";

import Typography from "../../components/Typography/Typography";

const Landing = () => {
	return (
		<div className={styles.landingContainer}>
			<Typography variant="h1">Landing</Typography>
		</div>
	);
};

export default Landing;
