// ... existing code ...
export const ROOT_ROUTES = {
	ADVANCED_COUNTER: '/advanced-counter',
	COUNTER: '/counter',
	EMPLOYEES: '/employees',
	MAIN: '/',
	TABLE: '/table',
} as const;

export const ROUTES = {
	ADVANCED_COUNTER: {
		MAIN: ROOT_ROUTES.ADVANCED_COUNTER,
	},
	COUNTER: {
		MAIN: ROOT_ROUTES.COUNTER,
	},
	EMPLOYEES: {
		MAIN: ROOT_ROUTES.EMPLOYEES,
	},
	MAIN: {
		MAIN: ROOT_ROUTES.MAIN,
	},
	TABLE: {
		MAIN: ROOT_ROUTES.TABLE,
	},
} as const;
