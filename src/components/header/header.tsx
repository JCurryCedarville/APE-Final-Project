import styles from './header.module.scss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-headers-and-templates
 */
export const Header = ({ className }: HeaderProps) => {
    const [Data, setData] = useState({object: [{id: "", user: "", name: "", is_default: "",  major: "",  dmajor: "",  minor: "" , dminor: "" ,cat_year: "" ,notes:""}]});
    var planState = document.getElementById('planId');
    useEffect(() => {
        if (document.getElementById('planId')?.getAttribute('value') !== ""){
            fetch('http://localhost:4000/plans/id=' + document.getElementById('planId')?.getAttribute('value'))
            .then(res => res.json())
            .then(data => setData(data))  
            .catch(err => console.log(err));
        }
    });
    if (Data.object[0] !== undefined) {
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
                            <strong>Student:</strong> {Data.object[0].user}
                        </p>
                    </div>

                    <div id="infoMajor">
                        <p className="infoP">
                            <strong>Major:</strong> {Data.object[0].major} {Data.object[0].dmajor}
                        </p>
                    </div>

                    <div id="infoCatalog">
                        <input type="hidden" id="yearNum" value={Data.object[0].cat_year} />
                        <p className="infoP">
                            <strong>Catalog:</strong> {Data.object[0].cat_year}
                        </p>
                    </div>

                    <div id="infoMinor">
                        <p className="infoP">
                            <strong>Minor:</strong> {Data.object[0].minor} {Data.object[0].dminor}
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
    );}else{
        return (<div><h1>NO USER</h1></div>);
    }
};
