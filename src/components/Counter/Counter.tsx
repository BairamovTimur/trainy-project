import { useState } from 'react';
import { MinusOutlined, RedoOutlined, PlusOutlined } from '@ant-design/icons';

import { Button } from '../Button/Button';

import styles from './Counter.module.css';

export const Counter = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount(count + 1);
	};

	const handleDecrement = () => {
		setCount(count - 1);
	};

	const handleReset = () => {
		setCount(0);
	};

	return (
		<div className={styles.container}>
			<div aria-live='polite' className={styles.value}>
				{count}
			</div>
			<div className={styles.buttons}>
				<Button
					ariaLabel='Уменьшить значение'
					onClick={handleDecrement}
				>
					<MinusOutlined />
				</Button>
				<Button
					ariaLabel='Увеличить значение'
					onClick={handleIncrement}
				>
					<PlusOutlined />
				</Button>
				<Button
					ariaLabel='Сбросить значение'
					onClick={handleReset}>
					<RedoOutlined />
				</Button>
			</div>
		</div>
	);
};
