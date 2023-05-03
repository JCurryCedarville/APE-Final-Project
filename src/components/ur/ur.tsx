import styles from './ur.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import addCourse from './addCourse';

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
        fetch("localhost:4000/plans/notes"),
        {
            method: "post",
            data: {text: r.value, pid: document.getElementById('planId')?.getAttribute('value')}
        }
    };
    function LoadNotes() {
        var Pid = document.getElementById('planId')?.getAttribute('value')
        fetch('http://localhost:4000/plans/id=' + Pid)
            .then(res => res.json())
            .then(data => document.getElementById('notes')?.setAttribute('value', data.object[0].notes))
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
    function deleteParent(event:any){
        var r = event.target;
        var p = r.parentNode;
        p.parentNode.removeChild(p);
    }
    

    return (
        <div className={classNames(styles.root, className)} onMouseEnter={updateData}>
            <div className={styles.GridSchedule}>
                <div className={styles.Semester}>
                    <h1>Transfered Classes</h1>
                    <ul>
                    {Data.object.map((course, key) => {
                        if(course.term === "Transfer"){
                            var obj = "course_id=" + course.course_id + " name=" + course.name + " term=" + course.term + " year=" + course.year + " credits=" + course.credits;
                            return(
                                <li value={obj}>
                                {course.course_id} {course.name} + {course.credits}
                                <button onClick={deleteParent}> -X- </button>
                                </li>
                            );
                            
                        }
                        else{
                            return(null);
                        }
                    })}
                    </ul>
                </div>
                {years.map((year) => {
                    if(year === years[0]){
                        return(
                            <div className={styles.Semester}>
                                <h1>Fall {year}</h1>
                                <ul onDrop={addCourse} >
                                {Data.object.map((course, key) => {
                                    if(course.year === year && course.term === "Fall"){
                                        return(
                                            <li draggable>{course.course_id} {course.name} {course.credits}
                                            <button onClick={deleteParent}> -X- </button>
                                            </li>
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
                            <div className={styles.Semester}>
                                <h1>Spring {year}</h1>
                                <ul>
                                {Data.object.map((course, key) => {
                                    if(course.year === year && course.term === "Spring"){
                                        return(
                                            <li>{course.course_id} {course.name} {course.credits}
                                            <button onClick={deleteParent}> -X- </button>
                                            </li>
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
                                <div className={styles.Semester}>
                                    <h1>Spring {year}</h1>
                                    <ul>
                                {Data.object.map((course, key) => {
                                    if(course.year === year && course.term === "Spring"){
                                        return(
                                            <li>{course.course_id} {course.name} {course.credits}
                                            <button onClick={deleteParent}> -X- </button>
                                            </li>
                                        );
                                    }
                                    else{
                                        return(null);
                                    }
                                })}
                                </ul>
                                </div>
                                <div className={styles.Semester}>
                                    <h1>Summer {year}</h1>
                                    <ul>
                                {Data.object.map((course, key) => {
                                    if(course.year === year && course.term === "Summer"){
                                        return(
                                            <li>{course.course_id} {course.name} {course.credits}
                                            <button onClick={deleteParent}> -X- </button>
                                            </li>
                                        );
                                    }
                                    else{
                                        return(null);
                                    }
                                })}
                                </ul>
                                </div>
                                <div className={styles.Semester}>
                                    <h1>Fall {year}</h1>
                                    <ul>
                                {Data.object.map((course, key) => {
                                    if(course.year === year && course.term === "Fall"){
                                        return(
                                            <li>{course.course_id} {course.name} {course.credits}
                                            <button onClick={deleteParent}> -X- </button>
                                            </li>
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
                <div className={styles.Notes} onFocusCapture={LoadNotes}>
                <label>
                    Notes: <textarea name="notes" id='notes' onBlur={SaveNotes}>
                    </textarea>
                </label>
                </div>
        </div>
    );
};
