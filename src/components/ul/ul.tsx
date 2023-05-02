import styles from './ul.module.scss';
import classNames from 'classnames';
import Accordion from '../Accordion';
import { useEffect, useState } from 'react';

export interface ULProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-uls-and-templates
 */


// var accordionItems = [
//     {
//       title: 'Accordion Item #1',
//       content: (
//         <div>
//           <strong>This is the first item's accordion body.</strong> It is hidden
//           by default, but shown when the title is clicked. It will also be
//           hidden if the title is clicked again or when another item is clicked.
//           You can pass HTML tags in the content such as <u>underline tag</u>,{' '}
//           <i>italic</i>, or even another list like this:
//           <ul>
//             <li>Bread</li>
//             <li>Eggs</li>
//             <li>Milk</li>
//           </ul>
//         </div>
//       ),
//     },
//     {
//       title: 'Accordion Item #2',
//       content: (
//         <div>
//           <strong>This is the second item's accordion body.</strong> It is
//           hidden by default, but shown when the title is clicked. It will also
//           be hidden if the title is clicked again or when another item is
//           clicked. You can pass HTML tags in the content such as{' '}
//           <u>underline tag</u>, <i>italic</i>, or even another list like this:
//           <ul>
//             <li>Bread</li>
//             <li>Eggs</li>
//             <li>Milk</li>
//           </ul>
//         </div>
//       ),
//     },
//     {
//       title: 'Accordion Item #3',
//       content: (
//         <div>
//           <strong>This is the third item's accordion body.</strong> It is hidden
//           by default, but shown when the title is clicked. It will also be
//           hidden if the title is clicked again or when another item is clicked.
//           You can pass HTML tags in the content such as <u>underline tag</u>,{' '}
//           <i>italic</i>, or even another list like this:
//           <ul>
//             <li>Bread</li>
//             <li>Eggs</li>
//             <li>Milk</li>
//           </ul>
//         </div>
//       ),
//     }
// ];
var accordionItems = [{title: '',content: (<></>)}];
export const UL = ({ className }: ULProps) => {
  const [MajorData, setMajorData] = useState({object: [{course_id: "", name: "", course_type: ""}]});
  const [MinorData, setMinorData] = useState({object: [{course_id: "", name: ""}]});
  const [GenEdData, setGenEdData] = useState({object: [{course_id: "", name: ""}]});
  function updateData(){
    var Mj = document.getElementById('MajorName')?.getAttribute('value');
    var Mn = document.getElementById('MinorName')?.getAttribute('value')
    fetch('http://localhost:4000/major=' + Mj).then(res => res.json()).then(data => setMajorData(data)).catch(err => console.log(err));
    fetch('http://localhost:4000/minor=' + Mn).then(res => res.json()).then(data => setMinorData(data)).catch(err => console.log(err));
    fetch('http://localhost:4000/geneds').then(res => res.json()).then(data => setGenEdData(data)).catch(err => console.log(err));
    var accordionItems = [
      {
        title: {Mj} + ' Requirements',
        content: (
          <ul>
          {MajorData.object.map((item) => (
            <li>
              {item.course_id} - {item.name}
            </li>
          ))}
          </ul>
          )
      },
      {
        title: {Mn} + ' Requirements',
        content: (
          <ul>
          {MinorData.object.map((item) => (
            <li>
              {item.course_id} - {item.name}
            </li>
          ))}
          </ul>
        )
      },
      {
        title: 'GenEd Requirements',
        content: (
          <ul>
          {GenEdData.object.map((item) => (
            <li>
              {item.course_id} - {item.name}
            </li>
          ))}
          </ul>          
          )
      }
    ]
  };
    return (
        <div className={classNames(styles.root, className)}>
            <div className="container">
            <Accordion items={accordionItems} />
            </div>
        </div>
    );
};
