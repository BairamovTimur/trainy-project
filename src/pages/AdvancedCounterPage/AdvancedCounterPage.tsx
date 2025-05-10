import { AdvancedCounter} from '@/components/AdvancedCounter/AdvancedCounter';
import styles from './AdvancedCounterPage.module.css';

export const AdvancedCounterPage = () => (
	<div className={styles.container}>
		<h1 className={styles.pageTitle}>Продвинутый счетчик</h1>
		<AdvancedCounter />
	</div>
);
