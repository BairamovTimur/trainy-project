import { useSelector, useDispatch } from 'react-redux';
import { TableCounters } from '@/components/TableCounters/TableCounters';
import { UserList } from '@/components/UserList/UserList';
import { users, firstListUsers, secondListUsers } from '@/helpers/tableHelpers';
import { RootState } from '@/store';
import {
	toggleUser,
	selectAll,
	deselectAll,
	selectEveryFifth,
} from '@/store/slices/usersSlice';

import styles from './AdvancedUsersTable.module.css';

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
