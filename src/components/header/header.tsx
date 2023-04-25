import styles from './header.module.scss';
import classNames from 'classnames';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-headers-and-templates
 */
export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.Header}>
                <div className={classNames(styles.HeaderSelect, styles.headerInfo)}>
                    <h1>R&amp;E APE</h1>
                    <p>
                        <strong>R</strong>eact <strong>&amp; E</strong>xpress <strong>A</strong>
                        cademic <strong>P</strong>lanning <strong>E</strong>
                        nvironment
                    </p>
                </div>
                <div className={classNames('studentInfo', styles.studentInfo)}>
                    <div id="infoStudent">
                        <p className="infoP">
                            <strong>Student:</strong> Chris
                        </p>
                    </div>

                    <div id="infoMajor">
                        <p className="infoP">
                            <strong>Major:</strong> Computer Science
                        </p>
                    </div>

                    <div id="infoCatalog">
                        <p className="infoP">
                            <strong>Catalog:</strong> 2022
                        </p>
                    </div>

                    <div id="infoMinor">
                        <p className="infoP">
                            <strong>Minor:</strong> Bible
                        </p>
                    </div>
                </div>
                <div className={styles.headerButtons}>
                    <div>
                        <select id="plans" className={styles.ChoosePlan}>
                            <option>Choose Plan:</option>
                            <option>Default Plan</option>
                            <option>Other Plan</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};
