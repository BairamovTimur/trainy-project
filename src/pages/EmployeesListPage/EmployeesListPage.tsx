import { BackButton } from '@/components/BackButton/BackButton';

import { AdvancedUsersTable } from '../../components/AdvancedUsersTable/AdvancedUsersTable';

import styles from './EmployeesListPage.module.css';

export const EmployeesListPage = () => {
	return (
		<div className={styles.employeesListPage}>
			<AdvancedUsersTable />
			<BackButton />
		</div>
	);
};
