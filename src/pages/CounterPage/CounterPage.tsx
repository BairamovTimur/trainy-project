import { useNavigate } from 'react-router';
import { Button } from '@/components/Button/Button';
import { Counter } from '@/components/Counter/Counter';
import { ROUTES } from '@/shared/routes';
import { ArrowLeftOutlined } from '@ant-design/icons';

import styles from './CounterPage.module.css';
import buttonStyles from '@/components/Button/Button.module.css';

export const CounterPage = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Счётчик</h1>
			<Counter />
			<Button
				ariaLabel='Вернуться на главную страницу'
				className={buttonStyles.backButton}
				onClick={() => navigate(ROUTES.MAIN.MAIN)}
			>
				<ArrowLeftOutlined /> На главную
			</Button>
		</div>
	);
};
