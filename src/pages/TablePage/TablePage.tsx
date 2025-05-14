import { useNavigate } from 'react-router';
import { Button } from '@/components/Button/Button';
import { ROUTES } from '@/shared/routes';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { UsersTable } from '../../components/UsersTable/UsersTable';

import styles from './TablePage.module.css';
import buttonStyles from '@/components/Button/Button.module.css';

export const TablePage = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<UsersTable />
			<Button
				ariaLabel='Вернуться на главную страницу'
				className={buttonStyles.backButton}
				onClick={() => navigate(ROUTES.MAIN.MAIN)}
			>
				<ArrowLeftOutlined /> На главную
			</Button>
		</div>
	);
};
