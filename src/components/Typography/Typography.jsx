import styles from "./Typography.module.scss";

const variantMapping = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	p1: "p",
	p2: "p",
	caption: "span",
	button: "span",
	overline: "span",
};

const Typography = (props) => {
	const {
		variant = "p1",
		children,
		className = "",
		color = "black",
		bold = false,
		italic = false,
		underline = false,
		as,
	} = props;

	const Component = as || variantMapping[variant] || "p";

	const classes = [
		styles.typography,
		styles[variant],
		color ? styles[color] : "",
		bold ? styles.bold : "",
		italic ? styles.italic : "",
		underline ? styles.underline : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return <Component className={classes}>{children}</Component>;
};

export default Typography;
