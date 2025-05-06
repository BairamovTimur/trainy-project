import { useState } from 'react';
import { MinusOutlined, RedoOutlined, PlusOutlined } from '@ant-design/icons';

import styles from './Counter.module.css';

interface CounterProps {
	initialValue?: number;
	onChange?: (value: number) => void;
}

export const Counter = ({ initialValue = 0, onChange }: CounterProps) => {
	const [count, setCount] = useState(initialValue);

	const handleIncrement = () => {
		const newValue = count + 1;
		setCount(newValue);
		onChange?.(newValue);
	};

	const handleDecrement = () => {
		const newValue = count - 1;
		setCount(newValue);
		onChange?.(newValue);
	};

	const handleReset = () => {
		setCount(initialValue);
		onChange?.(initialValue);
	};

	return (
		<div className={styles.container}>
			<div aria-live='polite' className={styles.value}>
				{count}
			</div>
			<div className={styles.buttons}>
				<button
					aria-label='Уменьшить значение'
					className={styles.button}
					onClick={handleDecrement}
					type='button'
				>
					<MinusOutlined />
				</button>
				<button
					aria-label='Увеличить значение'
					className={styles.button}
					onClick={handleIncrement}
					type='button'
				>
					<PlusOutlined />
				</button>
				<button
					aria-label='Сбросить значение'
					className={styles.button}
					onClick={handleReset}
					type='button'
				>
					<RedoOutlined />
				</button>
			</div>
		</div>
	);
};
