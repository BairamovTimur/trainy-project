import styles from './styles.module.css';

type ButtonProps = {
	children: string;
	onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
	return (
		<button className={`${styles.button}`} onClick={onClick}>
			{children}
		</button>
	);
};
