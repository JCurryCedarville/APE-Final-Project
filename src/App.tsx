import styles from './App.module.scss';
import Header_module from './components/header/header.module.scss';
import { LandingLogin } from './components/landing-login/landing-login';
import { Planner } from './components/planner/planner';
import { FacultyPage } from './components/faculty-page/faculty-page';

function App() {
    return (
        <div className={styles.App}>
            <div>
                <LandingLogin />
            </div>
            <div className={styles.FacultyPage}>
                <FacultyPage />
            </div>
            <div className={styles.Planner}>
                <Planner />
            </div>
        </div>
    );
}

export default App;
