import { createSlice } from '@reduxjs/toolkit';

interface ICounterState {
	value: number;
}

const initialState: ICounterState = {
	value: 0,
};

export const counterSlice = createSlice({
	initialState: initialState,
	name: 'counter',
	reducers: {
		decrement: state => {
			state.value -= 1;
		},
		increment: state => {
			state.value += 1;
		},
		reset: state => {
			state.value = 0;
		},
	},
});

export const { decrement, increment, reset } = counterSlice.actions;
