import { Counter } from '@/components/Counter/Counter';

import styles from './CounterPage.module.css';

export const CounterPage = () => (
	<div className={styles.container}>
		<h1>Счётчик</h1>
		<Counter />
	</div>
);
