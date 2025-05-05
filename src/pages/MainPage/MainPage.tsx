import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/routes';
import {
	CalculatorOutlined,
	FundOutlined,
	TeamOutlined,
	TableOutlined,
} from '@ant-design/icons';

import styles from './styles.module.css';

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
		ariaLabel: 'Перейти на страницу Список сотрудников',
		icon: <TeamOutlined aria-hidden='true' className={styles.icon} />,
		title: 'Список сотрудников',
		to: ROUTES.EMPLOYEES.MAIN,
	},
	{
		ariaLabel: 'Перейти на страницу Таблица',
		icon: <TableOutlined aria-hidden='true' className={styles.icon} />,
		title: 'Таблица',
		to: ROUTES.TABLE.MAIN,
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
