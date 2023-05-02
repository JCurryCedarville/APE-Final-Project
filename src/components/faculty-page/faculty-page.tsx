import styles from './faculty-page.module.scss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export interface FacultyPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-faculty-pages-and-templates
 */
 
var [data, setData] = useState([]);

useEffect(() => {
    fetch('/catalog/')
    .then(res => res.json())
    .then(data => setData(data))
}, []);
//var url = 'http://localhost:4000/catalog/';
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
                            {/* <td>{val.name}</td>
                            <td>{val.id}</td>
                            <td>{val.mjor}</td> */}
                            {/* <td>
                                <form action={url} method='GET'>
                                    <input type="hidden" name ="plan" value={val.id} />
                                    <button type='submit'>Clicks</button>
                                </form>
                            </td> */}
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
};
