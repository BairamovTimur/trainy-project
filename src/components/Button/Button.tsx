import styles from './Button.module.css';

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
	children,
	className = '',
	type = 'button',
	...props
}: ButtonProps) => (
	<button className={`${styles.button} ${className}`} type={type} {...props}>
		{children}
	</button>
);
