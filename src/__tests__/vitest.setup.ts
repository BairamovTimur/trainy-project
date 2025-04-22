import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import '@testing-library/jest-dom';

vi.stubGlobal('localStorage', {
	clear: vi.fn(),
	getItem: vi.fn(),
	removeItem: vi.fn(),
	setItem: vi.fn(),
});

vi.stubGlobal(
	'ResizeObserver',
	vi.fn().mockImplementation(() => ({
		disconnect: vi.fn(),
		observe: vi.fn(),
		unobserve: vi.fn(),
	}))
);

vi.stubGlobal(
	'MutationObserver',
	vi.fn().mockImplementation(() => ({
		disconnect: vi.fn(),
		observe: vi.fn(),
		takeRecords: vi.fn(),
	}))
);

afterEach(() => {
	cleanup();
	vi.clearAllMocks();
});
