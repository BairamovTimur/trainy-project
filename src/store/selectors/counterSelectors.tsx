import { RootState } from '../index';

export const selectActiveCounter = (state: RootState) =>
	state.counter.counters.find(counter => counter.isActive);

export const selectCounters = (state: RootState) => state.counter.counters;
export const selectTimerMode = (state: RootState) => state.counter.timerMode;
