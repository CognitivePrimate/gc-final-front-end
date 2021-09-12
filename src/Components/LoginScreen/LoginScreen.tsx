import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { UserLogin } from "../../Model/Interfaces";
import "./LoginScreen.css";


const LoginScreen = () => {

    const [UsernameLogin, setUsernameLogin] = useState<UserLogin>({
        username: '',
        password: ''
    })

    const [authenticatedLogin, setAuthenticatedLogin] = useState({
        authenticated: '/'
    })
    console.log(UsernameLogin);
    const HandleLoginSubmit = (e: FormEvent) => {
        e.preventDefault();


        if(UsernameLogin.username == 'admin' && UsernameLogin.password == 'password'){
            setAuthenticatedLogin({authenticated:"/HomeScreen"})
            console.log(UsernameLogin);
            console.log(authenticatedLogin);
        } else if (UsernameLogin.username == 'volunteer' && UsernameLogin.password == 'password'){
            setAuthenticatedLogin({authenticated:"/HomeScreen"})
            console.log(UsernameLogin);
            console.log(authenticatedLogin);
        } else {
            setUsernameLogin({username: 'incorrect username', password: 'incorrect password'})
            console.log(UsernameLogin);
            console.log(authenticatedLogin);
            console.log(' no valid password login combination');
        }
    }

    return (
        <main className="login-main">
            <form className="login-form" action="submit" onSubmit={HandleLoginSubmit}>
                <h3 className="login-title">App Name</h3>
                <section className="login-section">
                    <label htmlFor="username-login" className="login-label">Username</label>
                    <input type="text" name="username-login" id="username-login" className="login-input" onChange={ (e) => setUsernameLogin({username: e.target.value, password: UsernameLogin.password})}/>
                </section>
                <section className="login-section">
                    <label htmlFor="password-login" className="login-label">Password</label>
                    <input type="text" name="password-login" id="password-login" className="login-input" onChange= { (e) => setUsernameLogin({username: UsernameLogin.username, password: e.target.value})}/>
                </section>
                <section className="login-section">
                    <Link to={authenticatedLogin.authenticated}><button className="login-submit-button" type="button" onClick={HandleLoginSubmit}>Submit</button></Link>
                </section>
            </form>
            <Link to={authenticatedLogin.authenticated}><button>Go to HomePage</button></Link>
        </main>
    )
}

export default LoginScreen;