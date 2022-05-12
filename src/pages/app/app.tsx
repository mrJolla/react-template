import { AppHeader } from '../../components/app-header/app-header';
import { MainLayout } from '../../layouts/main-layout/main-layout';

import styles from './app.module.css';

export function App() {
  return (
    <MainLayout>
      <div className={styles.app}>
        <AppHeader />
      </div>
    </MainLayout>
  );
}
