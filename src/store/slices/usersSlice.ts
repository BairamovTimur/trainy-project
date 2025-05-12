import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsersState {
    selectedUsers: number[];
}

const initialState: UsersState = {
    selectedUsers: []
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        toggleUser: (state, action: PayloadAction<number>) => {
            const userId = action.payload;
            const index = state.selectedUsers.indexOf(userId);
            if (index === -1) {
                state.selectedUsers.push(userId);
            } else {
                state.selectedUsers.splice(index, 1);
            }
        },
        selectAll: (state, action: PayloadAction<number[]>) => {
            state.selectedUsers = action.payload;
        },
        deselectAll: (state) => {
            state.selectedUsers = [];
        },
        selectEveryFifth: (state, action: PayloadAction<number[]>) => {
            state.selectedUsers = action.payload.filter(id => id % 5 === 0);
        }
    }
});

export const { toggleUser, selectAll, deselectAll, selectEveryFifth } = usersSlice.actions;
export default usersSlice.reducer;