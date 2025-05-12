import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { 
    MinusOutlined, 
    RedoOutlined, 
    PlusOutlined, 
    PlusCircleOutlined, 
    DeleteOutlined, 
    PauseOutlined 
} from '@ant-design/icons';
import { Button } from '../Button/Button';
import { 
    increment, 
    decrement, 
    reset, 
    addCounter, 
    resetAll, 
    setTimerMode 
} from '@/store/slices/counterSlice';
import { RootState } from '@/store';
import styles from './AdvancedCounter.module.css';

export const AdvancedCounter = () => {
    const { counters, timerMode } = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!timerMode) return;

        const interval = setInterval(() => {
            dispatch(timerMode === 'increment' ? increment() : decrement());
        }, 5000);

        return () => clearInterval(interval);
    }, [timerMode, dispatch]);

    const handleTimerToggle = (mode: 'increment' | 'decrement' | null) => {
        dispatch(setTimerMode(timerMode === mode ? null : mode));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.counters}>
                {counters.map(counter => (
                    <div
                        key={counter.id}
                        className={`${styles.counter} ${!counter.isActive ? styles.inactive : ''}`}
                    >
                        <div aria-live="polite" className={styles.value}>
                            {counter.value}
                        </div>
                        <div className={styles.buttons}>
                            <Button 
                                ariaLabel="Уменьшить значение"
                                onClick={() => dispatch(decrement())}
                            >
                                <MinusOutlined />
                            </Button>
                            <Button
                                ariaLabel='Увеличить значение'
                                onClick={() => dispatch(increment())}
                            >
                                <PlusOutlined />
                            </Button>
                            <Button
                                ariaLabel='Сбросить значение'
                                onClick={() => dispatch(reset())}
                            >
                                <RedoOutlined />
                            </Button>
                        </div>
                        <div className={styles.timerButtons}>
                            <Button
                                ariaLabel='Уменьшать каждые 5 секунд'
                                onClick={() => handleTimerToggle('decrement')}
                                className={timerMode === 'decrement' ? styles.active : ''}
                            >
                                <MinusOutlined /> Таймер
                            </Button>
                            <Button
                                ariaLabel='Увеличивать каждые 5 секунд'
                                onClick={() => handleTimerToggle('increment')}
                                className={timerMode === 'increment' ? styles.active : ''}
                            >
                                <PlusOutlined /> Таймер
                            </Button>
                            {timerMode && (
                                <Button
                                    ariaLabel='Остановить таймер'
                                    onClick={() => handleTimerToggle(null)}
                                    className={styles.stopButton}
                                >
                                    <PauseOutlined />
                                </Button>
                            )}
                        </div>
                        {timerMode && (
                            <div className={styles.timerMessage}>
                                {timerMode === 'increment' 
                                    ? 'Включено увеличение счётчика на 1 каждые 5 секунд'
                                    : 'Включено уменьшение счётчика на 1 каждые 5 секунд'
                                }
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className={styles.actions}>
                <Button
                    ariaLabel='Добавить новый счетчик'
                    onClick={() => dispatch(addCounter())}
                    className={styles.addButton}
                >
                    <PlusCircleOutlined /> Добавить новый счетчик
                </Button>
                <Button
                    ariaLabel="Сбросить все счетчики"
                    onClick={() => dispatch(resetAll())}
                    className={styles.resetButton}
                >
                    <DeleteOutlined /> Сбросить все счетчики
                </Button>
            </div>
        </div>
    );
};