import styles from './App.module.scss';
import { LandingLogin } from './components/landing-login/landing-login';
import { Planner } from './components/planner/planner';
import { FacultyPage } from './components/faculty-page/faculty-page';

function App() {
    function onFormSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData: Record<string, string> = {};

        function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
            return 'value' in e && 'name' in e;
        }

        Array.from(e.currentTarget.elements).filter(isInputNamedElement).forEach((field) => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });
        if (formData.name == "Josh" || formData.name == "josh" && formData.password == "1234") {
            Show("FacultyPage");
            
        }
        function Show(page:string){
            if (page == "FacultyPage"){
                document.getElementsByClassName("")
            }
        }
        //need to change this to the faculty page
            //document.getElementById("root")!.innerHTML = "<div class=\"App\"><div class=\"FacultyPage\"><div class=\"root FacultyPage__root\"><h1>Welcome Faculty!</h1><h2>Your students are:</h2><table class=\"CatalogTable FacultyPage__CatalogTable\"><thead><th>Student Name</th><th>Total Credits</th><th>Major</th><th>Default Plan</th></thead><tbody><td>Josh</td><td>19</td><td>Math</td><td><form action=\"http://localhost:4000/user/\" method=\"GET\"><input type=\"hidden\" name=\"plan\" value=\"19\" /><button type=\"submit\">Click here</button></form></td></tbody><tbody><td>Jeffery</td><td>13</td><td>Art</td><td><form action=\"http://localhost:4000/user/\" method=\"GET\"><input type=\"hidden\" name=\"plan\" value=\"13\" /><button type=\"submit\">Click here</button></form></td></tbody><tbody><td>Chris</td><td>25</td><td>Computer</td><td><form action=\"http://localhost:4000/user/\" method=\"GET\"><input type=\"hidden\" name=\"plan\" value=\"25\" /><button type=\"submit\">Click here</button></form></td></tbody></table></div></div></div>";
        // fetch('http://localhost:4000/Catalog', {
        //     method: 'GET',
        //     body: JSON.stringify(formData)
            
        // }).then(response => {
        //     // Do something here on success!
        // }).catch(error => {
        //     // Do something here on error!
        // });
        //console.log(formData);
    }
    return (
        <div className={styles.App}>
            <div className={styles.LoginOrginizer}>
                <h1>Login:</h1>
                <form className={styles.LoginForm} onSubmit={onFormSubmit}>
                    <label>Name:</label>
                    <br />
                    <input name="name" id="name" type="text" />
                    <br />
                    <label>Password:</label>
                    <br />
                    <input name="password" id="password" type="text" />
                    <br />
                    <br />
                    <button>Submit</button> 
                </form>
            </div>
            <div className={styles.FacultyPage}>
                <FacultyPage />
            </div>
            <div className={styles.Planner}>
                <Planner />
            </div>
        </div>       
    );
    // <div className={styles.App}>
        //     <div className={styles.LoginPage}>
        //         <LandingLogin />
}

export default App;
