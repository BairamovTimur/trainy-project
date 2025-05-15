import { BackButton } from '@/components/BackButton/BackButton';

import { UsersTable } from '../../components/UsersTable/UsersTable';

import styles from './TablePage.module.css';

export const TablePage = () => {
	return (
		<div className={styles.container}>
			<UsersTable />
			<BackButton />
		</div>
	);
};
