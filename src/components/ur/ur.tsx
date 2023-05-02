import styles from './ur.module.scss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

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
    function onUpdate(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
    }
    const [Data, setData] = useState({object: [{name: "string", password: "string", type: "string", planId: "string" }]});

    // useEffect(() => {
    //     if (document.getElementById('planId')?.getAttribute('value') !== "0") {  
    //         fetch('http://localhost:4000/courses/pid=' + document.getElementById('planId')?.getAttribute('value'))
    //         .then(res => res.json())
    //         .then(data => setData(data))  
    //         .catch(err => console.log(err));
    //     }
    // }, []);
    function updateData(){
        fetch('http://localhost:4000/courses/pid=' + document.getElementById('planId')?.getAttribute('value'))
            .then(res => res.json())
            .then(data => setData(data))  
            .catch(err => console.log(err));
    };
    return (
        <div className={classNames(styles.root, className)} onFocus={updateData}>
            <div className={styles.GridSchedule}>
                {Data.object.map((val, key) => {
                    return (
                        <div className={styles.Semester} key={key} draggable>
                            <td>{val.name}</td>
                            <td>{val.password}</td>
                            <td>{val.type}</td>
                            <td>
                                <form onSubmit={onUpdate} method='GET'>
                                    <input type="hidden" name ="plan" value={val.planId} />
                                    <button type='submit'>Click Me!</button>
                                </form>
                            </td>
                        </div>
                    );
                })}
                    
                <div className={styles.Notes}>
                <label>
                    Notes: <textarea name="notes" id='notes' onBlur={SaveNotes}></textarea>
                </label>
                </div>
            </div>
        </div>
    );
};
