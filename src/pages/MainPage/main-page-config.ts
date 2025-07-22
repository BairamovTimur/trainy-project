import {
	UnorderedListOutlined,
	TableOutlined,
	DashboardOutlined,
	CopyrightOutlined,
} from '@ant-design/icons';

export const MAIN_PAGE_NAVIGATION_LINKS = [
	{
		IconComponent: CopyrightOutlined,
		id: 1,
		title: 'Счётчик',
		to: '/counter',
	},
	{
		IconComponent: DashboardOutlined,
		id: 2,
		title: 'Продвинутый счётчик',
		to: '/advanced-counter',
	},
	{
		IconComponent: UnorderedListOutlined,
		id: 3,
		title: 'Список сотрудников',
		to: '/user-list',
	},
	{
		IconComponent: TableOutlined,
		id: 4,
		title: 'Таблица',
		to: '/table',
	},
] as const;
