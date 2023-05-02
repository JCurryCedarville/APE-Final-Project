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
 
    
export const FacultyPage = ({ className }: FacultyPageProps) => {

    const [Data, setData] = useState({object: [{name: "string", password: "string", type: "string", planId: "string" }]});

    useEffect(() => {
    fetch('http://localhost:4000/catalog/')
    .then(res => res.json())
    .then(data => setData(data))  
    .catch(err => console.log(err));
    //console.log(Data);
    //var url = 'http://localhost:4000/catalog/';
    }, []);
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Welcome Faculty!</h1>
            <h2>Your students are:</h2>
            <table className={styles.CatalogTable}>
                <thead>
                    <th>Student Name</th>
                    <th>Password</th>
                    <th>Type</th>
                    <th>Default Plan</th>
                </thead>
                {Data.object.map((val, key) => {
                    return (
                        <tbody key={key}>
                            <td>{val.name}</td>
                            <td>{val.password}</td>
                            <td>{val.type}</td>
                            <td>
                                <form action={""} method='GET'>
                                    <input type="hidden" name ="plan" value={val.planId} />
                                    <button type='submit'>Click Me!</button>
                                </form>
                            </td>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
};
