import styles from './Button.module.css';

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	ariaLabel: string;
}

export const Button = ({
	children,
	className = '',
	type = 'button',
	ariaLabel,
	...props
}: ButtonProps) => (
	<button
		className={`${styles.button} ${className}`}
		type={type}
		aria-label={ariaLabel}
		{...props}
	>
		{children}
	</button>
);
