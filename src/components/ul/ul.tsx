import styles from './ul.module.scss';
import classNames from 'classnames';

export interface ULProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-uls-and-templates
 */
export const UL = ({ className }: ULProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                Imagine an accordian hereImagine an accordian hereImagine an accordian hereImagine
                an accordian here Imagine an accordian hereImagine an accordian hereImagine an
                accordian hereImagine an accordian here Imagine an accordian hereImagine an
                accordian hereImagine an accordian hereImagine an accordian here Imagine an
                accordian hereImagine an accordian hereImagine an accordian hereImagine an accordian
                here Imagine an accordian hereImagine an accordian hereImagine an accordian
                hereImagine an accordian here Imagine an accordian hereImagine an accordian
                hereImagine an accordian hereImagine an accordian here Imagine an accordian
                hereImagine an accordian hereImagine an accordian hereImagine an accordian here
                Imagine an accordian hereImagine an accordian hereImagine an accordian hereImagine
                an accordian here
            </div>
        </div>
    );
};
