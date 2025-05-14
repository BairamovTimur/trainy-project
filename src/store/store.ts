import { combineReducers, configureStore } from '@reduxjs/toolkit';

import counterReducer from './slices/counterSlice';
import usersReducer from './slices/usersSlice';
import { testSlice } from './test';

export const rootReducer = combineReducers({
	counter: counterReducer,
	test: testSlice.reducer,
	users: usersReducer,
});

export const store = configureStore({
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({ serializableCheck: false }),
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
