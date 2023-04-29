import styles from './ul.module.scss';
import classNames from 'classnames';
import Accordion from '../Accordion';

export interface ULProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-uls-and-templates
 */
const accordionItems = [
    {
      title: 'Accordion Item #1',
      content: (
        <div>
          <strong>This is the first item's accordion body.</strong> It is hidden
          by default, but shown when the title is clicked. It will also be
          hidden if the title is clicked again or when another item is clicked.
          You can pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Accordion Item #2',
      content: (
        <div>
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, but shown when the title is clicked. It will also
          be hidden if the title is clicked again or when another item is
          clicked. You can pass HTML tags in the content such as{' '}
          <u>underline tag</u>, <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Accordion Item #3',
      content: (
        <div>
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when the title is clicked. It will also be
          hidden if the title is clicked again or when another item is clicked.
          You can pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
        </div>
      ),
    }
];

export const UL = ({ className }: ULProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className="container">
            <Accordion items={accordionItems} />
            </div>
        </div>
    );
};
