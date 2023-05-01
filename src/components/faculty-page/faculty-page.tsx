import styles from './faculty-page.module.scss';
import classNames from 'classnames';

export interface FacultyPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-faculty-pages-and-templates
 */
const data = [
    { name: 'Josh', id: 19, planlink: 'Click here', mjor: 'Math' },
    { name: 'Jeffery', id: 13, planlink: 'Click here', mjor: 'Art' },
    { name: 'Chris', id: 25, planlink: 'Click here', mjor: 'Computer' },
];
var url = 'http://localhost:4000/user/';
export const FacultyPage = ({ className }: FacultyPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Welcome Faculty!</h1>
            <h2>Your students are:</h2>
            <table className={styles.CatalogTable}>
                <thead>
                    <th>Student Name</th>
                    <th>Total Credits</th>
                    <th>Major</th>
                    <th>Default Plan</th>
                </thead>
                {data.map((val, key) => {
                    return (
                        <tbody key={key}>
                            <td>{val.name}</td>
                            <td>{val.id}</td>
                            <td>{val.mjor}</td>
                            <td>
                                <form action={url} method='GET'>
                                    <input type="hidden" name ="plan" value={val.id} />
                                    <button type='submit'>{val.planlink}</button>
                                </form>
                            </td>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
};
