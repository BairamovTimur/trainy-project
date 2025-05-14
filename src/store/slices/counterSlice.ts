import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Counter {
	id: number;
	isActive: boolean;
	value: number;
}

interface CounterState {
	counters: Counter[];
	timerMode: 'increment' | 'decrement' | null;
}

const initialState: CounterState = {
	counters: [{ id: 1, isActive: true, value: 0 }],
	timerMode: null,
};

export const counterSlice = createSlice({
	initialState,
	name: 'counter',
	reducers: {
		addCounter: state => {
			const newId =
				Math.max(...state.counters.map(counter => counter.id)) + 1;
			state.counters = [
				...state.counters.map(counter => ({
					...counter,
					isActive: false,
				})),
				{
					id: newId,
					isActive: true,
					value: 0,
				},
			];
			state.timerMode = null;
		},
		decrement: (state, action: PayloadAction<number>) => {
			const counter = state.counters.find(c => c.id === action.payload);
			if (counter) {
				counter.value -= 1;
			}
		},
		increment: (state, action: PayloadAction<number>) => {
			const counter = state.counters.find(c => c.id === action.payload);
			if (counter) {
				counter.value += 1;
			}
		},
		reset: (state, action: PayloadAction<number>) => {
			const counter = state.counters.find(c => c.id === action.payload);
			if (counter) {
				counter.value = 0;
			}
		},
		resetAll: state => {
			state.counters = [{ id: 1, isActive: true, value: 0 }];
			state.timerMode = null;
		},
		setTimerMode: (
			state,
			action: PayloadAction<'increment' | 'decrement' | null>
		) => {
			state.timerMode = action.payload;
		},
	},
});

export const {
	addCounter,
	decrement,
	increment,
	reset,
	resetAll,
	setTimerMode,
} = counterSlice.actions;

export default counterSlice.reducer;
