import { Link } from 'react-router';
import { ROUTES } from '@/shared/routes';
import {
	CalculatorOutlined,
	FundOutlined,
	TeamOutlined,
	TableOutlined,
} from '@ant-design/icons';

import styles from './MainPage.module.css';

const blocks = [
	{
		ariaLabel: 'Перейти на страницу Счётчик',
		icon: <CalculatorOutlined aria-hidden='true' className={styles.icon} />,
		title: 'Счётчик',
		to: ROUTES.COUNTER.MAIN,
	},
	{
		ariaLabel: 'Перейти на страницу Продвинутый счетчик',
		icon: <FundOutlined aria-hidden='true' className={styles.icon} />,
		title: 'Продвинутый счетчик',
		to: ROUTES.ADVANCED_COUNTER.MAIN,
	},
	{
		ariaLabel: 'Перейти на страницу Cписок пользователей',
		icon: <TableOutlined aria-hidden='true' className={styles.icon} />,
		title: 'Cписок пользователей',
		to: ROUTES.TABLE.MAIN,
	},
	{
		ariaLabel: 'Перейти на страницу Продвинутый список пользователей',
		icon: <TeamOutlined aria-hidden='true' className={styles.icon} />,
		title: 'Продвинутый список пользователей',
		to: ROUTES.EMPLOYEES.MAIN,
	},
];

export const MainPage = () => (
	<div className={styles.container}>
		{blocks.map(({ ariaLabel, icon, title, to }) => (
			<Link
				aria-label={ariaLabel}
				className={styles.gridItem}
				key={to}
				tabIndex={0}
				to={to}
			>
				{icon}
				<span>{title}</span>
			</Link>
		))}
	</div>
);
