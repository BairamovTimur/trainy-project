import { Navigate, Route, Routes } from 'react-router';
import { ROUTES } from '@/shared/routes';
import { MainPage } from '@/pages';
import { CounterPage } from '@/pages/CounterPage/CounterPage';
import { AdvancedCounterPage } from '@/pages/AdvancedCounterPage/AdvancedCounterPage';
import { EmployeesListPage } from '@/pages/EmployeesListPage/EmployeesListPage';
import { TablePage } from '@/pages/TablePage/TablePage';

export const AppRoutes = () => (
	<Routes>
		<Route element={<MainPage />} path={ROUTES.MAIN.MAIN} />
		<Route element={<CounterPage />} path={ROUTES.COUNTER.MAIN} />
		<Route element={<AdvancedCounterPage />} path={ROUTES.ADVANCED_COUNTER.MAIN} />
		<Route element={<EmployeesListPage />} path={ROUTES.EMPLOYEES.MAIN} />
		<Route element={<TablePage />} path={ROUTES.TABLE.MAIN} />
		<Route element={<Navigate replace to={ROUTES.MAIN.MAIN} />} path="*" />
	</Routes>
);