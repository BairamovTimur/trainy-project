import type { RootState } from '../store';

export const counterValue = (state: RootState) => state.counter.value;
