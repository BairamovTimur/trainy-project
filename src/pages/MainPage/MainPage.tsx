import { NavigationLink } from '@/shared/components/NavigationLink/NavigationLink';
import {
	UnorderedListOutlined,
	TableOutlined,
	DashboardOutlined,
	CopyrightOutlined,
} from '@ant-design/icons';

import styles from './styles.module.css';

export const MainPage = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Главная страница</h1>
			<div className={styles.grid}>
				<NavigationLink
					icon={<CopyrightOutlined />}
					title='Счётчик'
					to='/counter'
				/>
				<NavigationLink
					icon={<DashboardOutlined />}
					title='Продвинутый счётчик'
					to='/advanced-counter'
				/>
				<NavigationLink
					icon={<UnorderedListOutlined />}
					title='Список сотрудников'
					to='/user-list'
				/>
				<NavigationLink
					icon={<TableOutlined />}
					title='Таблица'
					to='/table'
				/>
			</div>
		</div>
	);
};
