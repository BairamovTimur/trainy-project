import { firstListUsers } from '@/helpers/tableHelpers';

import styles from './UserList.module.css';

interface UserListProps {
	onToggleUser: (id: number) => void;
	selectedUsers: number[];
	startIndex: number;
	users: typeof firstListUsers;
}

export const UserList = ({
	onToggleUser,
	selectedUsers,
	startIndex,
	users,
}: UserListProps) => (
	<div className={styles.listContainer}>
		<h3 className={styles.listTitle}>
			{startIndex === 0
				? 'Первый список (1-500)'
				: 'Второй список (501-1000)'}
		</h3>
		<ol className={styles.userList} start={startIndex + 1}>
			{users.map(user => (
				<li className={styles.userItem} key={user.id}>
					<label className={styles.userLabel}>
						<input
							checked={selectedUsers.includes(user.id)}
							className={styles.checkbox}
							onChange={() => onToggleUser(user.id)}
							type='checkbox'
						/>
						<span className={styles.userName}>{user.fullName}</span>
					</label>
				</li>
			))}
		</ol>
	</div>
);
