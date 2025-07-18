import styles from './styles.module.css';
import { decrement, increment, testValue } from '@/store/test';
import { useDispatch, useSelector } from 'react-redux';

export const Counter = () => {
    const dispatch = useDispatch();
	const value = useSelector(testValue);

    return(
        <div className={styles.container}>
            <h1>Counter</h1>
            <div>
				<h2>Value: {value}</h2>
				<button onClick={() => dispatch(increment())}>Increment</button>
				<button onClick={() => dispatch(decrement())}>Decrement</button>
			</div>
        </div>
    )
}