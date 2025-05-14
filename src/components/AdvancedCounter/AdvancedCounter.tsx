import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import {
	increment,
	decrement,
	reset,
	addCounter,
	resetAll,
	setTimerMode,
} from '@/store/slices/counterSlice';
import {
	MinusOutlined,
	PlusOutlined,
	PlusCircleOutlined,
	DeleteOutlined,
	PauseOutlined,
	RedoOutlined,
} from '@ant-design/icons';

import { Button } from '../Button/Button';

import styles from './AdvancedCounter.module.css';

export const AdvancedCounter = () => {
	const { counters, timerMode } = useSelector(
		(state: RootState) => state.counter
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!timerMode) return;

		const activeCounter = counters.find(counter => counter.isActive);
		if (!activeCounter) return;

		const interval = setInterval(() => {
			dispatch(
				timerMode === 'increment'
					? increment(activeCounter.id)
					: decrement(activeCounter.id)
			);
		}, 5000);

		return () => clearInterval(interval);
	}, [timerMode, dispatch, counters]);

	const handleTimerToggle = (mode: 'increment' | 'decrement' | null) => {
		dispatch(setTimerMode(timerMode === mode ? null : mode));
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.counters}>
				{counters.map(counter => (
					<div
						className={`${styles.counter} ${!counter.isActive ? styles.inactive : ''}`}
						key={counter.id}
					>
						<div aria-live='polite' className={styles.value}>
							{counter.value}
						</div>
						{counter.isActive && (
							<>
								<div className={styles.buttons}>
									<Button
										ariaLabel='Уменьшить значение'
										onClick={() =>
											dispatch(decrement(counter.id))
										}
									>
										<MinusOutlined />
									</Button>
									<Button
										ariaLabel='Увеличить значение'
										onClick={() =>
											dispatch(increment(counter.id))
										}
									>
										<PlusOutlined />
									</Button>
									<Button
										ariaLabel='Сбросить значение'
										onClick={() =>
											dispatch(reset(counter.id))
										}
									>
										<RedoOutlined />
									</Button>
								</div>
								<div className={styles.timerButtons}>
									<Button
										ariaLabel='Уменьшать каждые 5 секунд'
										className={
											timerMode === 'decrement'
												? styles.active
												: ''
										}
										onClick={() =>
											handleTimerToggle('decrement')
										}
									>
										<MinusOutlined /> Таймер
									</Button>
									<Button
										ariaLabel='Увеличивать каждые 5 секунд'
										className={
											timerMode === 'increment'
												? styles.active
												: ''
										}
										onClick={() =>
											handleTimerToggle('increment')
										}
									>
										<PlusOutlined /> Таймер
									</Button>
									{timerMode && (
										<Button
											ariaLabel='Остановить таймер'
											className={styles.stopButton}
											onClick={() =>
												handleTimerToggle(null)
											}
										>
											<PauseOutlined />
										</Button>
									)}
								</div>
								{timerMode && (
									<div className={styles.timerMessage}>
										{timerMode === 'increment'
											? 'Включено увеличение счётчика на 1 каждые 5 секунд'
											: 'Включено уменьшение счётчика на 1 каждые 5 секунд'}
									</div>
								)}
							</>
						)}
					</div>
				))}
			</div>
			<div className={styles.actions}>
				<Button
					ariaLabel='Добавить новый счетчик'
					className={styles.addButton}
					onClick={() => dispatch(addCounter())}
				>
					<PlusCircleOutlined /> Добавить новый счетчик
				</Button>
				<Button
					ariaLabel='Сбросить все счетчики'
					className={styles.resetButton}
					onClick={() => dispatch(resetAll())}
				>
					<DeleteOutlined /> Сбросить все счетчики
				</Button>
			</div>
		</div>
	);
};
