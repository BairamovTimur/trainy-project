import { Navigate, Route, Routes } from 'react-router';
import { MainPage } from '@/pages';
import { ROOT_ROUTES, ROUTES } from '@/shared/routes';
import { Counter } from '@/pages/Counter/Counter';
import { AdvancedCounter } from '@/pages/AdvancedCounter/AdvancedCounter';
import { UserList } from '@/pages/UserList/UserList';
import { Table } from '@/pages/Table/Table';

export const AppRoutes = () => (
	<Routes>
		<Route element={<MainPage />} path={ROUTES.MAIN.MAIN} />
		<Route element={<Counter />} path={ROUTES.COUNTER.MAIN} />
		<Route element={<AdvancedCounter />} path={ROUTES.ADVANCED_COUNTER.MAIN} />
		<Route element={<UserList />} path={ROUTES.USER_LIST.MAIN} />
		<Route element={<Table />} path={ROUTES.TABLE.MAIN} />
		<Route element={<Navigate replace to={ROOT_ROUTES.MAIN} />} path='*' />
	</Routes>
);
