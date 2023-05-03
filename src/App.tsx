import styles from './App.module.scss';
import { Planner } from './components/planner/planner';
import { FacultyPage } from './components/faculty-page/faculty-page';
import { useEffect, useState } from 'react';

function App() {
    const [UserData, setUserData] = useState({object: [{name: "", password: "", type: "", planId: "" }]});
    const [planId, setPlan] = useState(0);
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

        if ((formData.name === "Josh" || formData.name === "josh") && formData.password === "1234") {
            Show("FacultyPage");
        }
        else if ((formData.name === "Joe" || formData.name === "joe") && formData.password === "mama") {
            Show("PlannerPage");
        }
        else if ((formData.name === "Chris" || formData.name === "chris") && formData.password === "lafafafa") {
            Show("PlannerPage");
        }
        else{
            alert("Incorrect username or password");
        }

        function updateUsers(){
            fetch('http://localhost:4000/users/')
            .then(res => res.json())
            .then(data => setUserData(data))  
            .catch(err => console.log(err));
        }

        function Show(page:string){ 
            updateUsers()
            //set plan to logeed in user
            console.log(UserData)
            UserData.object.map((val, key) => {
                console.log(val)
                console.log(formData.name)
                if (val.name === formData.name){
                    document.getElementById("planId")?.setAttribute("value", val.planId);
                }else{
                    console.log("no match");
                }
                return (<></>);
            }

            );
            if (page === "FacultyPage"){
                window.document.getElementById("Faculty")?.setAttribute("style", "display: block;");
                window.document.getElementById("Login")?.setAttribute("style", "display: none;");
                window.document.getElementById("Planner")?.setAttribute("style", "display: none;");
            }
            else if (page === "PlannerPage"){
                window.document.getElementById("Faculty")?.setAttribute("style", "display: none;");
                window.document.getElementById("Login")?.setAttribute("style", "display: none;");
                window.document.getElementById("Planner")?.setAttribute("style", "display: block;");

                
                
            }
            else if (page === "LoginPage"){
                window.document.getElementById("Faculty")?.setAttribute("style", "display: none;");
                window.document.getElementById("Login")?.setAttribute("style", "display: block;");
                window.document.getElementById("Planner")?.setAttribute("style", "display: none;");
            }
        }
    }
    return (
        <div className={styles.App}>
            <input id="planId" style={{display: "none"}} value=""/>
            <div id="Login" >
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
            </div>
            <div id="Faculty" className={styles.FacultyPage}>
                <FacultyPage />
            </div>
            <div id="Planner" className={styles.Planner}>
                <Planner />
            </div>
        </div>       
    );
}

export default App;
