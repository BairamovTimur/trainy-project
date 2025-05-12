import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { testSlice } from './test';
import usersReducer from './slices/usersSlice';
import counterReducer from './slices/counterSlice';

export const rootReducer = combineReducers({
	test: testSlice.reducer,
	users: usersReducer,
	counter: counterReducer
});

export const store = configureStore({
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({ serializableCheck: false }),
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
