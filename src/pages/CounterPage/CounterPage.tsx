import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/store/test';
import { testValue } from '@/store/test/test.selector';
import styles from './CounterPage.module.css';
export const CounterPage = () => {
	const dispatch = useDispatch();
	const value = useSelector(testValue);

	return (
		<div className={styles.container}>
			<h1>Счётчик</h1>
			<h2>Значение: {value}</h2>
			<div className={styles.buttons}>
				<button onClick={() => dispatch(decrement())}>Уменьшить</button>
				<button onClick={() => dispatch(increment())}>Увеличить</button>
			</div>
		</div>
	);
};

	

