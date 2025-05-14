import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsersState {
	selectedUsers: number[];
}

const initialState: UsersState = {
	selectedUsers: [],
};

export const usersSlice = createSlice({
	initialState,
	name: 'users',
	reducers: {
		deselectAll: state => {
			state.selectedUsers = [];
		},
		selectAll: (state, action: PayloadAction<number[]>) => {
			state.selectedUsers = action.payload;
		},
		selectEveryFifth: (state, action: PayloadAction<number[]>) => {
			state.selectedUsers = action.payload.filter(id => id % 5 === 0);
		},
		toggleUser: (state, action: PayloadAction<number>) => {
			const userId = action.payload;
			const index = state.selectedUsers.indexOf(userId);
			if (index === -1) {
				state.selectedUsers.push(userId);
			} else {
				state.selectedUsers.splice(index, 1);
			}
		},
	},
});

export const { deselectAll, selectAll, selectEveryFifth, toggleUser } =
	usersSlice.actions;
export default usersSlice.reducer;
