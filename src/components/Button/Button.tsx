import styles from './Button.module.css';

interface ButtonProps {
	ariaLabel: string;
	children: React.ReactNode;
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
	ariaLabel,
	children,
	className = '',
	type = 'button',
	...props
}: ButtonProps) => (
	<button
		aria-label={ariaLabel}
		className={`${styles.button} ${className}`}
		type={type}
		{...props}
	>
		{children}
	</button>
);
