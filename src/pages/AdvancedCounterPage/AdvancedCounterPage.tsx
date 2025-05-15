import { AdvancedCounter } from '@/components/AdvancedCounter/AdvancedCounter';
import { BackButton } from '@/components/BackButton/BackButton';

import styles from './AdvancedCounterPage.module.css';

export const AdvancedCounterPage = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Продвинутый счетчик</h1>
			<AdvancedCounter />
			<BackButton />
		</div>
	);
};
