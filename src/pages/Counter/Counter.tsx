import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, testValue } from '@/store/test';

import styles from './styles.module.css';

export const Counter = () => {
	const dispatch = useDispatch();
	const value = useSelector(testValue);

	return (
		<div className={styles.container}>
			<h1>Счётчик</h1>
			<div>
				<h2>Value: {value}</h2>
				<button onClick={() => dispatch(increment())}>Increment</button>
				<button onClick={() => dispatch(decrement())}>Decrement</button>
			</div>
		</div>
	);
};
