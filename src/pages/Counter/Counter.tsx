import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button/Button';
import { decrement, increment, testValue } from '@/store/test';

import styles from './styles.module.css';

export const Counter = () => {
	const dispatch = useDispatch();
	const value = useSelector(testValue);

	return (
		<div className={styles.container}>
			<div className={styles.title}>Счётчик</div>
			<div>
				<p>Value: {value}</p>
				<div>
					<Button onClick={() => dispatch(decrement())}>-</Button>
					<Button onClick={() => dispatch(increment())}>+</Button>
				</div>
			</div>
		</div>
	);
};
