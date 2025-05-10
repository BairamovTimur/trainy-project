import { useState, useEffect } from "react";
import { MinusOutlined, RedoOutlined, PlusOutlined, PlusCircleOutlined, DeleteOutlined, PauseOutlined } from "@ant-design/icons";

import { Button } from "../Button/Button";
import styles from './AdvancedCounter.module.css';

interface Counter {
    id: number;
    value: number;
    isActive: boolean;
}


type TimerMode = 'increment' | 'decrement' | null;


export const AdvancedCounter = () => {
    const [count, setCounters] = useState<Counter[]>([
        { id: 1, value: 0, isActive: true }
    ]);
    const [timerMode, setTimerMode] = useState<TimerMode>(null);

    // Эффект для таймера
    useEffect(() => {
        if (!timerMode) return;

        const interval = setInterval(() => {
            setCounters(prevCounters =>
                prevCounters.map(counter =>
                    counter.isActive
                        ? {
                            ...counter,
                            value: timerMode === 'increment' 
                                ? counter.value + 1 
                                : counter.value - 1
                        }
                        : counter
                )
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [timerMode]);


    const handleIncrement = () => {
        setCounters(prevCounters =>
            prevCounters.map(counter =>
                counter.isActive ? {
                    ...counter, value: counter.value + 1
                }
                    : counter
            )
        );
    };

    const handleDecrement = () => {
        setCounters(prevCounters =>
            prevCounters.map(counter =>
                counter.isActive
                    ? { ...counter, value: counter.value - 1 }
                    : counter
            )
        );
    };

    const handleReset = () => {
        setCounters(prevCounters =>
            prevCounters.map(counter =>
                counter.isActive
                    ? { ...counter, value: 0 }
                    : counter
            )
        );
    };


    const handleAddCounter = () => {
        setCounters(prevCounters => [
            ...prevCounters.map(counter => ({ ...counter, isActive: false })),
            {
                id: prevCounters.length + 1,
                value: 0,
                isActive: true,
            }
        ]);
        setTimerMode(null);
    };


    const handleResetAll = () => {
        setCounters([
            { id: 1, value: 0, isActive: true }
        ]);
        setTimerMode(null);
    }

    const handleTimerToggle = (mode: TimerMode) => {
        setTimerMode(currentMode => currentMode === mode ? null : mode);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.counters}>
                {count.map(counter => (
                    <div
                        key={counter.id}
                        className={`${styles.counter} ${!counter.isActive ? styles.inactive : ''}`}
                    >
                        <div aria-live="polite" className={styles.value}>
                            {counter.value}
                        </div>
                        {counter.isActive && (
                            <>
                                <div className={styles.buttons}>
                                    <Button 
                                        ariaLabel="Уменьшить значение"
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
                                        onClick={handleReset}
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
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className={styles.actions}>
                <Button
                    ariaLabel='Добавить новый счетчик'
                    onClick={handleAddCounter}
                    className={styles.addButton}
                >
                    <PlusCircleOutlined /> Добавить новый счетчик
                </Button>
                <Button
                    ariaLabel="Сбросить все счетчики"
                    onClick={handleResetAll}
                    className={styles.resetButton}
                >
                    <DeleteOutlined /> Сбросить все счетчики
                </Button>
            </div>
        </div>
    );
};
