import { NavigationLink } from '@/shared/components/NavigationLink/NavigationLink';

import { MAIN_PAGE_NAVIGATION_LINKS } from './main-page-config';

import styles from './styles.module.css';

export const MainPage = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Главная страница</h1>
			<div className={styles.grid}>
				{MAIN_PAGE_NAVIGATION_LINKS.map(link => {
					return (
						<NavigationLink
							icon={<link.IconComponent />}
							key={link.id}
							title={link.title}
							to={link.to}
						/>
					);
				})}
			</div>
		</div>
	);
};
