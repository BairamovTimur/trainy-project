import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router';

import { AppRoutes } from './app-routes';

export const router = createBrowserRouter(
	createRoutesFromElements(<Route element={<AppRoutes />} path='*' />)
);
