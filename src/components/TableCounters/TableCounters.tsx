import styles from './TableCounters.module.css';

interface TableCountersProps {
	selectedUsers: number;
	totalUsers: number;
}

export const TableCounters = ({
	selectedUsers,
	totalUsers,
}: TableCountersProps) => {
	const unselectedUsers = totalUsers - selectedUsers;

	return (
		<div className={styles.counters}>
			<div className={styles.counter}>
				<span>Общее количество пользователей:</span>
				<span className={styles.counterValue}>{totalUsers}</span>
			</div>
			<div className={styles.counter}>
				<span>Выбрано пользователей:</span>
				<span className={styles.counterValue}>{selectedUsers}</span>
			</div>
			<div className={styles.counter}>
				<span>Не выбрано пользователей:</span>
				<span className={styles.counterValue}>{unselectedUsers}</span>
			</div>
		</div>
	);
};
