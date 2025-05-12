import { useSelector, useDispatch } from 'react-redux';
import { MinusOutlined, RedoOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from '../Button/Button';
import { increment, decrement, reset } from '@/store/slices/counterSlice';
import { RootState } from '@/store';
import styles from './Counter.module.css';

export const Counter = () => {
    const activeCounter = useSelector((state: RootState) => 
        state.counter.counters.find(counter => counter.isActive)
    );
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div aria-live='polite' className={styles.value}>
                {activeCounter?.value ?? 0}
            </div>
            <div className={styles.buttons}>
                <Button
                    ariaLabel='Уменьшить значение'
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
        </div>
    );
};