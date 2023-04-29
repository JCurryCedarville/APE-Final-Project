import styles from './lr.module.scss';
import classNames from 'classnames';

export interface LRProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-lrs-and-templates
 */
const data = [
    { name: 'Math', id: 19, credits: 3, desc: 'sad' },
    { name: 'Art', id: 13, credits: 3, desc: 'fun' },
    { name: 'Chem', id: 25, credits: 3, desc: 'hard' },
    { name: 'Math', id: 19, credits: 3, desc: 'sad' },
    { name: 'Art', id: 13, credits: 3, desc: 'fun' },
    { name: 'Chem', id: 25, credits: 3, desc: 'hard' },
    { name: 'Math', id: 19, credits: 3, desc: 'sad' },
    { name: 'Art', id: 13, credits: 3, desc: 'fun' },
    { name: 'Chem', id: 25, credits: 3, desc: 'hard' },
    { name: 'Math', id: 19, credits: 3, desc: 'sad' },
    { name: 'Art', id: 13, credits: 3, desc: 'fun' },
    { name: 'Chem', id: 25, credits: 3, desc: 'hard' },
    { name: 'Math', id: 19, credits: 3, desc: 'sad' },
    { name: 'Art', id: 13, credits: 3, desc: 'fun' },
    { name: 'Chem', id: 25, credits: 3, desc: 'hard' },
];

export const LR = ({ className }: LRProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <table className={styles.CatalogTable}>
                <tr>
                    <th>Course ID</th>
                    <th>Course Name</th>
                    <th>Description</th>
                    <th>Credits</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.desc}</td>
                            <td>{val.credits}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};
