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
    const [Data, setData] = useState({object: [{course_id: "string", name: "string", term: "string", year: "string", credits: "string" }]});

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

    var years:string[] = new Array();
    Data.object.forEach(function(course){
        if(!years.includes(course.year)){
            years.push(course.year);
        }
    });
    years.sort();

    return (
        <div className={classNames(styles.root, className)} onFocus={updateData}>
            <div className={styles.GridSchedule}>
                <div className={styles.Semester}>
                    <h1>Transfered Classes</h1>
                </div>
                {years.map((year) => {
                    if(year === years[0]){
                        return(
                            <div className={styles.Semester}>
                                <h1>Fall {year}</h1>
                            </div>
                        )
                    }
                    else if(year === years[years.length-1]){
                        return(
                            <div className={styles.Semester}>
                                <h1>Spring {year}</h1>
                            </div>
                        )
                    }
                    else{
                        return(
                            <>
                                <div className={styles.Semester}>
                                    <h1>Spring {year}</h1>
                                </div>
                                <div className={styles.Semester}>
                                    <h1>Summer {year}</h1>
                                </div>
                                <div className={styles.Semester}>
                                    <h1>Fall {year}</h1>
                                </div>
                            </>
                        );
                    }
                    
                })}

                {/* {Data.object.map((val, key) => {
                    return (
                        <div className={styles.Semester} key={key} draggable>
                            <td>{val.course_id}</td>
                            <td>{val.name}</td>
                            <td>{val.term}</td>
                            <td>{val.year}</td>
                            <td>{val.credits}</td>
                        </div>
                    );
                })} */}
            </div>
                <div className={styles.Notes}>
                <label>
                    Notes: <textarea name="notes" id='notes' onBlur={SaveNotes}></textarea>
                </label>
                </div>
        </div>
    );
};
