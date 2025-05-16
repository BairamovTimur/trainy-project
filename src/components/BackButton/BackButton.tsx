import { useNavigate } from 'react-router';
import { Button } from '@/components/Button/Button';
import { ROUTES } from '@/shared/routes';
import { ArrowLeftOutlined } from '@ant-design/icons';

import styles from './BackButton.module.css';

export const BackButton = () => {
	const navigate = useNavigate();

	return (
		<Button
			ariaLabel='Вернуться на главную страницу'
			className={styles.backButton}
			onClick={() => navigate(ROUTES.MAIN.MAIN)}
		>
			<ArrowLeftOutlined /> На главную
		</Button>
	);
};
