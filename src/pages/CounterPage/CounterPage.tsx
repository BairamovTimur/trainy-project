import { Counter } from '@/components/Counter/Counter';

import styles from './CounterPage.module.css';

export const CounterPage = () => (
	<div className={styles.container}>
		<h1 className={styles.pageTitle}>Счётчик</h1>
		<Counter />
	</div>
);
