import { useState, useMemo } from 'react';
import styles from './UsersTable.module.css';

const firstNames = ['Иван', 'Петр', 'Сергей', 'Алексей', 'Дмитрий', 'Андрей', 'Максим', 'Николай', 'Владимир', 'Артем'];
const lastNames = ['Иванов', 'Петров', 'Сидоров', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Соколов', 'Новиков', 'Морозов'];
const middleNames = ['Иванович', 'Петрович', 'Сергеевич', 'Алексеевич', 'Дмитриевич', 'Андреевич', 'Максимович', 'Николаевич', 'Владимирович', 'Артемович'];

export const UsersTable = () => {
    const [selectedUsers, setSelectedUsers] = useState<Set<number>>(new Set())

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

    const handleCheckboxChange = (userId: number) => {
        setSelectedUsers(prev => {
            const newSelected = new Set(prev);
            if (newSelected.has(userId)) {
                newSelected.delete(userId);
            } else {
                newSelected.add(userId);
            }
            return newSelected;
        });
    };

   return(
    <div className={styles.container}>
    <h1 className={styles.title}>Список пользователей</h1>
    
    <div className={styles.counters}>
      <div className={styles.counter}>
        <span>Общее количество пользователей:</span>
        <span className={styles.counterValue}>1000</span>
      </div>
      <div className={styles.counter}>
        <span>Выбрано пользователей:</span>
        <span className={styles.counterValue}>{selectedUsers.size}</span>
      </div>
      <div className={styles.counter}>
        <span>Не выбрано пользователей:</span>
        <span className={styles.counterValue}>{1000 - selectedUsers.size}</span>
      </div>
    </div>

    <div className={styles.tableContainer}>
      <ol className={styles.userList}>
        {users.map(user => (
          <li key={user.id} className={styles.userItem}>
            <label className={styles.userLabel}>
              <input
                type="checkbox"
                checked={selectedUsers.has(user.id)}
                onChange={() => handleCheckboxChange(user.id)}
                className={styles.checkbox}
              />
              <span className={styles.userName}>{user.fullName}</span>
            </label>
          </li>
        ))}
      </ol>
    </div>
  </div>
);
};