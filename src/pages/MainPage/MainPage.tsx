import styles from './styles.module.css';

import { NavigationLink } from '@/shared/components/NavigationLink/NavigationLink';

import { UnorderedListOutlined, TableOutlined, DashboardOutlined, CopyrightOutlined } from '@ant-design/icons'

export const MainPage = () => {
	return (
		<div className={styles.container}>
			<h1>MainPage</h1>
			<div className={styles.grid}>
				<NavigationLink title="Счетчик" to="/counter" icon={<CopyrightOutlined />} />
				<NavigationLink title="Продвинутый счетчик" to="/advanced-counter" icon={<DashboardOutlined />} />
				<NavigationLink title="Список сотрудников" to="/user-list" icon={<UnorderedListOutlined />} />	
				<NavigationLink title="Таблица" to="/table" icon={<TableOutlined />} />	
			</div>
		</div>
	);
};
