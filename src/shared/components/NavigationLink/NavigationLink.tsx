import { Link } from 'react-router';

import styles from './styles.module.css';

interface NavigationLinkProps {
	icon: React.ReactNode;
	title: string;
	to: string;
}

export const NavigationLink = ({ icon, title, to }: NavigationLinkProps) => {
	return (
		<Link className={styles.navigationLink} to={to}>
			<div className={styles.content}>
				<h1>{title}</h1>
				<div className={styles.icon}>
					{icon} {to}
				</div>
			</div>
		</Link>
	);
};
