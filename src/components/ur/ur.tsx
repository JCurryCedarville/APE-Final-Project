import styles from './ur.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

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
        <div className={classNames(styles.root, className)} onFocusCapture={updateData}>
            <div className={styles.GridSchedule}>
                <div className={styles.Semester} id={"Transfered"}>
                    <h1>Transfered Classes</h1>
                    <ul>
                    {Data.object.map((course, key) => {
                        if(course.term === "Transfer"){
                            return(
                                <li>{course.course_id} {course.name}</li>
                            );
                        }
                        else{
                            return(null);
                        }
                    })}
                    </ul>
                </div>
                {years.map((year, key) => {
                    if(year === years[0]){
                        return(
                            <div className={styles.Semester} id={"Fall " + year}>
                                <h1>Fall {year}</h1>
                                <ul>
                                {Data.object.map((course, key) => {
                                    if(course.year === year && course.term === "Fall"){
                                        return(
                                            <li>{course.course_id} {course.name} {course.credits}</li>
                                        );
                                    }
                                    else{
                                        return(null);
                                    }
                                })}
                                </ul>
                            </div>
                        )
                    }
                    else if(year === years[years.length-1]){
                        return(
                            <div className={styles.Semester} id={"Spring " + year}>
                                <h1>Spring {year}</h1>
                                <ul>
                                {Data.object.map((course, key) => {
                                    if(course.year === year && course.term === "Spring"){
                                        return(
                                            <li>{course.course_id} {course.name} {course.credits}</li>
                                        );
                                    }
                                    else{
                                        return(null);
                                    }
                                })}
                                </ul>
                            </div>
                        )
                    }
                    else{
                        return(
                            <>
                                <div className={styles.Semester} id={"Spring " + year}>
                                    <h1>Spring {year}</h1>
                                    <ul>
                                {Data.object.map((course, key) => {
                                    if(course.year === year && course.term === "Spring"){
                                        return(
                                            <li>{course.course_id} {course.name} {course.credits}</li>
                                        );
                                    }
                                    else{
                                        return(null);
                                    }
                                })}
                                </ul>
                                </div>
                                <div className={styles.Semester} id={"Summer " + year}>
                                    <h1>Summer {year}</h1>
                                    <ul>
                                {Data.object.map((course, key) => {
                                    if(course.year === year && course.term === "Summer"){
                                        return(
                                            <li>{course.course_id} {course.name} {course.credits}</li>
                                        );
                                    }
                                    else{
                                        return(null);
                                    }
                                })}
                                </ul>
                                </div>
                                <div className={styles.Semester} id={"Fall " + year}>
                                    <h1>Fall {year}</h1>
                                    <ul>
                                {Data.object.map((course, key) => {
                                    if(course.year === year && course.term === "Fall"){
                                        return(
                                            <li>{course.course_id} {course.name} {course.credits}</li>
                                        );
                                    }
                                    else{
                                        return(null);
                                    }
                                })}
                                </ul>
                                </div>
                            </>
                        );
                    }
                    
                })}

            </div>
                <div className={styles.Notes}>
                <label>
                    Notes: <textarea name="notes" id='notes' onBlur={SaveNotes}></textarea>
                </label>
            </div>
        </div>
    );

    


};
