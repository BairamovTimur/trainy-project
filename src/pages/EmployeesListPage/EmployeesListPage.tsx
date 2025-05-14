import { useNavigate } from 'react-router';
import { Button } from '@/components/Button/Button';
import { ROUTES } from '@/shared/routes';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { AdvancedUsersTable } from '../../components/AdvancedUsersTable/AdvancedUsersTable';

import styles from './EmployeesListPage.module.css';
import buttonStyles from '@/components/Button/Button.module.css';

export const EmployeesListPage = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.employeesListPage}>
			<AdvancedUsersTable />
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
