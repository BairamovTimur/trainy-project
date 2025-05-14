import { useSelector, useDispatch } from 'react-redux';
import { TableCounters } from '@/components/TableCounters/TableCounters';
import { users, firstListUsers, secondListUsers } from '@/helpers/tableHelpers';
import { RootState } from '@/store';
import {
	toggleUser,
	selectAll,
	deselectAll,
	selectEveryFifth,
} from '@/store/slices/usersSlice';

import styles from './AdvancedUsersTable.module.css';

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

export const AdvancedUsersTable = () => {
	const selectedUsers = useSelector(
		(state: RootState) => state.users.selectedUsers
	);
	const dispatch = useDispatch();

	const handleSelectAll = () => {
		dispatch(selectAll(users.map(user => user.id)));
	};

	const handleDeselectAll = () => {
		dispatch(deselectAll());
	};

	const handleSelectEveryFifth = () => {
		dispatch(selectEveryFifth(users.map(user => user.id)));
	};

	const handleToggleUser = (id: number) => {
		dispatch(toggleUser(id));
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Продвинутый список пользователей</h1>

			<div className={styles.header}>
				<TableCounters
					selectedUsers={selectedUsers.length}
					totalUsers={1000}
				/>

				<div className={styles.actions}>
					<button
						className={styles.actionButton}
						onClick={handleSelectAll}
					>
						Выбрать всех
					</button>
					<button
						className={styles.actionButton}
						onClick={handleDeselectAll}
					>
						Отменить выбранные
					</button>
					<button
						className={styles.actionButton}
						onClick={handleSelectEveryFifth}
					>
						Выбрать каждого пятого
					</button>
				</div>
			</div>

			<div className={styles.listsContainer}>
				<UserList
					onToggleUser={handleToggleUser}
					selectedUsers={selectedUsers}
					startIndex={0}
					users={firstListUsers}
				/>
				<UserList
					onToggleUser={handleToggleUser}
					selectedUsers={selectedUsers}
					startIndex={500}
					users={secondListUsers}
				/>
			</div>
		</div>
	);
};
