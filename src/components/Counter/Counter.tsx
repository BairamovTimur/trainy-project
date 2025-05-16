import { useSelector, useDispatch } from 'react-redux';
import { selectActiveCounter } from '@/store/selectors/counterSelectors';
import { increment, decrement, reset } from '@/store/slices/counterSlice';

import { CounterBaseButtons } from '../CounterBaseButtons/CounterBaseButtons';

import styles from './Counter.module.css';

export const Counter = () => {
	const activeCounter = useSelector(selectActiveCounter);
	const dispatch = useDispatch();

	if (!activeCounter) return null;

	return (
		<div className={styles.container}>
			<CounterBaseButtons
				onDecrement={() => dispatch(decrement(activeCounter.id))}
				onIncrement={() => dispatch(increment(activeCounter.id))}
				onReset={() => dispatch(reset(activeCounter.id))}
				value={activeCounter.value}
			/>
		</div>
	);
};
