import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Counter {
    id: number;
    value: number;
    isActive: boolean;
}

interface CounterState {
    counters: Counter[];
    timerMode: 'increment' | 'decrement' | null;
}

const initialState: CounterState = {
    counters: [{ id: 1, value: 0, isActive: true }],
    timerMode: null
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counters = state.counters.map(counter =>
                counter.isActive
                    ? { ...counter, value: counter.value + 1 }
                    : counter
            );
        },
        decrement: (state) => {
            state.counters = state.counters.map(counter =>
                counter.isActive
                    ? { ...counter, value: counter.value - 1 }
                    : counter
            );
        },
        reset: (state) => {
            state.counters = state.counters.map(counter =>
                counter.isActive
                    ? { ...counter, value: 0 }
                    : counter
            );
        },
        addCounter: (state) => {
            state.counters = [
                ...state.counters.map(counter => ({ ...counter, isActive: false })),
                {
                    id: state.counters.length + 1,
                    value: 0,
                    isActive: true
                }
            ];
            state.timerMode = null;
        },
        resetAll: (state) => {
            state.counters = [{ id: 1, value: 0, isActive: true }];
            state.timerMode = null;
        },
        setTimerMode: (state, action: PayloadAction<'increment' | 'decrement' | null>) => {
            state.timerMode = action.payload;
        }
    }
});

export const { 
    increment, 
    decrement, 
    reset, 
    addCounter, 
    resetAll, 
    setTimerMode 
} = counterSlice.actions;

export default counterSlice.reducer;