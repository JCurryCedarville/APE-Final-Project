import styles from './ur.module.scss';
import classNames from 'classnames';

export interface URProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-urs-and-templates
 */
export const UR = ({ className }: URProps) => {
    function SaveNotes(event:any) {
        var r = event.target;
        console.log(r.value);
    };
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.GridSchedule}>
                <div className={styles.Semester}>

                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
                <div className={styles.Semester}>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
                <div className={styles.Semester}>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
                <div className={styles.Semester}>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
                <div className={styles.Semester}>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
                <div className={styles.Semester}>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
            </div>
            <div className={styles.Notes}>
                <label>
                    Notes: <textarea name="notes" id='notes' onBlur={SaveNotes}></textarea>
                </label>
            </div>
        </div>
    );
};
