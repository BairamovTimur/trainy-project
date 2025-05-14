import { MinusOutlined, RedoOutlined, PlusOutlined } from '@ant-design/icons';

import { Button } from '../Button/Button';

import styles from './CounterBaseButtons.module.css';

interface CounterBaseButtonsProps {
	onDecrement: () => void;
	onIncrement: () => void;
	onReset: () => void;
	value: number;
}

export const CounterBaseButtons = ({
	onDecrement,
	onIncrement,
	onReset,
	value,
}: CounterBaseButtonsProps) => {
	return (
		<>
			<div aria-live='polite' className={styles.value}>
				{value}
			</div>
			<div className={styles.buttons}>
				<Button ariaLabel='Уменьшить значение' onClick={onDecrement}>
					<MinusOutlined />
				</Button>
				<Button ariaLabel='Увеличить значение' onClick={onIncrement}>
					<PlusOutlined />
				</Button>
				<Button ariaLabel='Сбросить значение' onClick={onReset}>
					<RedoOutlined />
				</Button>
			</div>
		</>
	);
};
