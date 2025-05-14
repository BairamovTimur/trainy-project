import { useNavigate } from 'react-router';
import { AdvancedCounter } from '@/components/AdvancedCounter/AdvancedCounter';
import { Button } from '@/components/Button/Button';
import { ROUTES } from '@/shared/routes';
import { ArrowLeftOutlined } from '@ant-design/icons';

import styles from './AdvancedCounterPage.module.css';
import buttonStyles from '@/components/Button/Button.module.css';

export const AdvancedCounterPage = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Продвинутый счетчик</h1>
			<AdvancedCounter />
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
