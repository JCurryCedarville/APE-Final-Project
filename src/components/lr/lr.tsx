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
                <table id="catalogTable">
                    <thead>
                        <tr>
                            <th>Course ID</th>
                            <th>Course Name</th>
                            <th>Description</th>
                            <th>Credits</th>
                        </tr>
                    </thead>
                    <tbody>
                        [DATA HERE]
                    </tbody>
                </table>
            </div>
        </div>
    );
};
