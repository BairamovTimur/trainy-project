import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleUser, selectAll, deselectAll, selectEveryFifth } from '@/store/slices/usersSlice';
import { RootState } from '@/store';
import styles from './AdvancedUsersTable.module.css';

const firstNames = ['Иван', 'Петр', 'Сергей', 'Алексей', 'Дмитрий', 'Андрей', 'Максим', 'Николай', 'Владимир', 'Артем'];
const lastNames = ['Иванов', 'Петров', 'Сидоров', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Соколов', 'Новиков', 'Морозов'];
const middleNames = ['Иванович', 'Петрович', 'Сергеевич', 'Алексеевич', 'Дмитриевич', 'Андреевич', 'Максимович', 'Николаевич', 'Владимирович', 'Артемович'];

export const AdvancedUsersTable = () => {
    const selectedUsers = useSelector((state: RootState) => state.users.selectedUsers);
    const dispatch = useDispatch();
    
    const users = useMemo(() => {
        const result = [];
        for (let i = 0; i < 1000; i++) {
            const firstName = firstNames[i % 10];
            const lastName = lastNames[Math.floor(i / 100) % 10];
            const middleName = middleNames[Math.floor(i / 10) % 10];
            result.push({
                id: i + 1,
                fullName: `${lastName} ${firstName} ${middleName}`
            });
        }
        return result;
    }, []);

    const firstListUsers = useMemo(() => users.slice(0, 500), [users]);
    const secondListUsers = useMemo(() => users.slice(500), [users]);

    const handleSelectAll = () => {
        dispatch(selectAll(users.map(user => user.id)));
    };

    const handleDeselectAll = () => {
        dispatch(deselectAll());
    };

    const handleSelectEveryFifth = () => {
        dispatch(selectEveryFifth(users.map(user => user.id)));
    };

    const UserList = ({ users, startIndex }: { users: typeof firstListUsers, startIndex: number }) => (
        <div className={styles.listContainer}>
            <h3 className={styles.listTitle}>
                {startIndex === 0 ? 'Первый список (1-500)' : 'Второй список (501-1000)'}
            </h3>
            <ol className={styles.userList} start={startIndex + 1}>
                {users.map(user => (
                    <li key={user.id} className={styles.userItem}>
                        <label className={styles.userLabel}>
                            <input
                                type="checkbox"
                                checked={selectedUsers.includes(user.id)}
                                onChange={() => dispatch(toggleUser(user.id))}
                                className={styles.checkbox}
                            />
                            <span className={styles.userName}>{user.fullName}</span>
                        </label>
                    </li>
                ))}
            </ol>
        </div>
    );

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Продвинутый список пользователей</h1>

            <div className={styles.header}>
                <div className={styles.counters}>
                    <div className={styles.counter}>
                        <span>Общее количество пользователей:</span>
                        <span className={styles.counterValue}>1000</span>
                    </div>
                    <div className={styles.counter}>
                        <span>Выбрано пользователей:</span>
                        <span className={styles.counterValue}>{selectedUsers.length}</span>
                    </div>
                    <div className={styles.counter}>
                        <span>Не выбрано пользователей:</span>
                        <span className={styles.counterValue}>{1000 - selectedUsers.length}</span>
                    </div>
                </div>

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
                <UserList users={firstListUsers} startIndex={0} />
                <UserList users={secondListUsers} startIndex={500} />
            </div>
        </div>
    );
};