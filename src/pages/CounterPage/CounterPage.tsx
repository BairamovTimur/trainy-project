import { BackButton } from '@/components/BackButton/BackButton';
import { Counter } from '@/components/Counter/Counter';

import styles from './CounterPage.module.css';

export const CounterPage = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Счётчик</h1>
			<Counter />
			<BackButton />
		</div>
	);
};
