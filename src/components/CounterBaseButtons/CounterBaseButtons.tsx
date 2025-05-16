import { MinusOutlined, RedoOutlined, PlusOutlined } from '@ant-design/icons';

import { Button } from '../Button/Button';

import styles from './CounterBaseButtons.module.css';

interface CounterBaseButtonsProps {
	hideValue?: boolean;
	onDecrement: () => void;
	onIncrement: () => void;
	onReset: () => void;
	value: number;
}

export const CounterBaseButtons = ({
	hideValue = false,
	onDecrement,
	onIncrement,
	onReset,
	value,
}: CounterBaseButtonsProps) => {
	return (
		<>
			{!hideValue && (
				<div aria-live='polite' className={styles.value}>
					{value}
				</div>
			)}
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
