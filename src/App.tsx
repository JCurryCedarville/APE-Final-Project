import styles from './App.module.scss';
import { UL } from './components/ul/ul';
import { Header } from './components/header/header';
import { UR } from './components/ur/ur';
import Header_module from './components/header/header.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <div className={styles.Organizer}>
                <Header />
                <UL className={styles.UL} />
                <UR className={styles.UR} />
            </div>
        </div>
    );
}

export default App;
