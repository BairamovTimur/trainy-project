import { Navigate, Route, Routes } from 'react-router';
import { MainPage } from '@/pages';
import { AdvancedCounter } from '@/pages/AdvancedCounter/AdvancedCounter';
import { Counter } from '@/pages/Counter/Counter';
import { Table } from '@/pages/Table/Table';
import { UserList } from '@/pages/UserList/UserList';
import { ROUTES } from '@/shared/routes';

export const AppRoutes = () => (
	<Routes>
		<Route element={<MainPage />} path={ROUTES.MAIN.MAIN} />
		<Route element={<Counter />} path={ROUTES.COUNTER.MAIN} />
		<Route
			element={<AdvancedCounter />}
			path={ROUTES.ADVANCED_COUNTER.MAIN}
		/>
		<Route element={<UserList />} path={ROUTES.USER_LIST.MAIN} />
		<Route element={<Table />} path={ROUTES.TABLE.MAIN} />
		<Route element={<Navigate replace to={ROUTES.MAIN.MAIN} />} path='*' />
	</Routes>
);
