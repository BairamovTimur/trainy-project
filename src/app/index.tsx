import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { store } from '@/store';

import { router } from './routes';

import '../app/assets/index.css';

export const App = () => (
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
