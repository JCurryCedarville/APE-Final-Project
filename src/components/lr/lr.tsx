import styles from './lr.module.scss';
import classNames from 'classnames';

export interface LRProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-lrs-and-templates
 */
export const LR = ({ className }: LRProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <table>LR</table>
            </div>
        </div>
    );
};
