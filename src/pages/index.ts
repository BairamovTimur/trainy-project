export { MainPage } from './MainPage/MainPage';
export { CounterPage } from './CounterPage/CounterPage';
export { AdvancedCounterPage } from './AdvancedCounterPage/AdvancedCounterPage';
export { EmployeesListPage } from './EmployeesListPage/EmployeesListPage';
export { TablePage } from './TablePage/TablePage';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/slices/counterSlice';
import usersReducer from '../store/slices/usersSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;