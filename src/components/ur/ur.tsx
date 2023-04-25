import styles from './ur.module.scss';
import classNames from 'classnames';

export interface URProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-urs-and-templates
 */
export const UR = ({ className }: URProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <div />
                <div />
                UR
            </div>
        </div>
    );
};
