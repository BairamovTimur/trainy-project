export const ROOT_ROUTES = {
	MAIN: '/',
	COUNTER: '/counter',
	ADVANCED_COUNTER: '/advanced-counter',
	USER_LIST: '/user-list',
	TABLE: '/table'
} as const;

export const ROUTES = {
	MAIN: {
		MAIN: ROOT_ROUTES.MAIN,
	},
	COUNTER: {
		MAIN: ROOT_ROUTES.COUNTER,
	},
	ADVANCED_COUNTER: {
		MAIN: ROOT_ROUTES.ADVANCED_COUNTER,
	},
	USER_LIST: {
		MAIN: ROOT_ROUTES.USER_LIST,
	},
	TABLE: {
		MAIN: ROOT_ROUTES.TABLE,
	}
} as const;
