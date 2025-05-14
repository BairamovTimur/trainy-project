// Константы для генерации имен
export const firstNames = [
	'Иван',
	'Петр',
	'Сергей',
	'Алексей',
	'Дмитрий',
	'Андрей',
	'Максим',
	'Николай',
	'Владимир',
	'Артем',
];
export const lastNames = [
	'Иванов',
	'Петров',
	'Сидоров',
	'Смирнов',
	'Кузнецов',
	'Попов',
	'Васильев',
	'Соколов',
	'Новиков',
	'Морозов',
];
export const middleNames = [
	'Иванович',
	'Петрович',
	'Сергеевич',
	'Алексеевич',
	'Дмитриевич',
	'Андреевич',
	'Максимович',
	'Николаевич',
	'Владимирович',
	'Артемович',
];

export interface User {
	fullName: string;
	id: number;
}

export const generateUsers = (): User[] => {
	const result: User[] = [];
	for (let i = 0; i < 1000; i++) {
		const firstName = firstNames[i % 10];
		const lastName = lastNames[Math.floor(i / 100) % 10];
		const middleName = middleNames[Math.floor(i / 10) % 10];
		result.push({
			fullName: `${lastName} ${firstName} ${middleName}`,
			id: i + 1,
		});
	}
	return result;
};

export const users = generateUsers();
export const firstListUsers = users.slice(0, 500);
export const secondListUsers = users.slice(500);
