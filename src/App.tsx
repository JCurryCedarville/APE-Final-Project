import styles from './App.module.scss';
import { UL } from './components/ul/ul';
import { Header } from './components/header/header';
import { UR } from './components/ur/ur';
import Header_module from './components/header/header.module.scss';
import { LL } from './components/ll/ll';
import { LR } from './components/lr/lr';

function App() {
    return (
        <div className={styles.App}>
            <div />
            <div className={styles.Planner}></div>
            <div className={styles.Organizer}>
                <Header />
                <div className={styles.MainBody}>
                    <UL className={styles.UL} />
                    <UR className={styles.UR} />
                    <LL />
                    <LR />
                </div>
            </div>
        </div>
    );
}

export default App;
