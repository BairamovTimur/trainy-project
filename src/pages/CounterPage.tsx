import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/store/test';
import { testValue } from '@/store/test/test.selector';

const CounterPage = () => {
	const dispatch = useDispatch();
	const value = useSelector(testValue);

	return (
		<div
			style={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				padding: 32,
			}}
		>
			<h1>Счётчик</h1>
			<h2>Value: {value}</h2>
			<div style={{ display: 'flex', gap: 16 }}>
				<button onClick={() => dispatch(increment())}>Increment</button>
				<button onClick={() => dispatch(decrement())}>Decrement</button>
			</div>
		</div>
	);
};

export default CounterPage;
