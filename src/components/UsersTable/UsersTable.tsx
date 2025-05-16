import { useSelector, useDispatch } from 'react-redux';
import { TableCounters } from '@/components/TableCounters/TableCounters';
import { users } from '@/helpers/tableHelpers';
import { RootState } from '@/store';
import { toggleUser } from '@/store/slices/usersSlice';

import styles from './UsersTable.module.css';

export const UsersTable = () => {
	const selectedUsers = useSelector(
		(state: RootState) => state.users.selectedUsers
	);
	const dispatch = useDispatch();

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Список пользователей</h1>

			<div className={styles.countersWrapper}>
				<TableCounters
					selectedUsers={selectedUsers.length}
					totalUsers={1000}
				/>
			</div>

			<div className={styles.tableContainer}>
				<ol className={styles.userList}>
					{users.map(user => (
						<li className={styles.userItem} key={user.id}>
							<label className={styles.userLabel}>
								<input
									checked={selectedUsers.includes(user.id)}
									className={styles.checkbox}
									onChange={() =>
										dispatch(toggleUser(user.id))
									}
									type='checkbox'
								/>
								<span className={styles.userName}>
									{user.fullName}
								</span>
							</label>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
};
