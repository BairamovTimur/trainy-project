import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { testSlice } from './test';

export const rootReducer = combineReducers({
	test: testSlice.reducer,
});

export const store = configureStore({
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({ serializableCheck: false }),
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
