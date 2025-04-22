import { createSlice } from '@reduxjs/toolkit';

interface ITestState {
	value: number;
}

const initialState: ITestState = {
	value: 0,
};

export const testSlice = createSlice({
	initialState: initialState,
	name: 'test',
	reducers: {
		decrement: state => {
			state.value -= 1;
		},
		increment: state => {
			state.value += 1;
		},
	},
});

export const { decrement, increment } = testSlice.actions;
