import { Navigate, Route, Routes } from 'react-router';
import { MainPage } from '@/pages';
import { ROOT_ROUTES, ROUTES } from '@/shared/routes';

export const AppRoutes = () => (
	<Routes>
		<Route element={<MainPage />} path={ROUTES.MAIN.MAIN} />
		<Route element={<Navigate replace to={ROOT_ROUTES.MAIN} />} path='*' />
	</Routes>
);
