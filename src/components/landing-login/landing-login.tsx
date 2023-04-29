import styles from './landing-login.module.scss';
import classNames from 'classnames';

export interface LandingLoginProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-landing-logins-and-templates
 */
export const LandingLogin = ({ className }: LandingLoginProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.LoginOrginizer}>
                <h1>Login:</h1>
                <form className={styles.LoginForm}>
                    <label>Name:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label>Password:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <br />
                    <button>Submit</button> 
                </form>
            </div>
        </div>
    );
};
