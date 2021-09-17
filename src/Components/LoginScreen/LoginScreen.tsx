import firebase from "../../firebaseConfig";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthUser } from "../../ContextProviders/auth-context";
import { authProvider } from "../../firebaseConfig";
import { UserLogin } from "../../Model/Interfaces";
import "./LoginScreen.css";


const LoginScreen = () => {

    // Tracks the user input username and password using the value of the inputs//
    const [UsernameLogin, setUsernameLogin] = useState<UserLogin>({
        username: '',
        password: ''
    })

    // state used to change the value of the Link route. Ideally, if the password and username is good, it will update
    // the state to the route that takes you to the home page.
    const [authenticatedLogin, setAuthenticatedLogin] = useState({
        authenticated: '/'
    })
    console.log(UsernameLogin);
    // const HandleLoginSubmit = (e: FormEvent) => {
    //     e.preventDefault();

        // if the username and password are equal to the volunteer or admin information,
        // then change the authenticatedLogin state to equal the route path to the home screen.
        // if not, then keep it on the home screen or '/'. 

        // TODO - update an error message that says something like "invalid username or password" to give a 
        // response to a bad password username combination.
    //     if(UsernameLogin.username == 'admin' && UsernameLogin.password == 'password'){
    //         setAuthenticatedLogin({authenticated:"/HomeScreen"})
    //         console.log(UsernameLogin);
    //         console.log(authenticatedLogin);
    //     } else if (UsernameLogin.username == 'volunteer' && UsernameLogin.password == 'password'){
    //         setAuthenticatedLogin({authenticated:"/HomeScreen"})
    //         console.log(UsernameLogin);
    //         console.log(authenticatedLogin);
    //     } else {
    //         setUsernameLogin({username: 'incorrect username', password: 'incorrect password'});
    //         alert('Please enter a valid username and password');
    //         console.log(UsernameLogin);
    //         console.log(authenticatedLogin);
    //         console.log(' no valid password login combination');
    //     }
    // }
/*
    return (
        <main className="login-main">
            <form className="login-form" action="submit" onSubmit={HandleLoginSubmit}>
                <h3 className="login-title">App Name</h3>
                <section className="login-section">
                    <label htmlFor="username-login" className="login-label">Username</label>
                    {/* using 'onChange' to track the user value. Each time something is typed it updates the UsernameLogin }
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
    ) */

    const user = useAuthUser()

    function logout() {
        firebase.auth().signOut();
      }

    function signIn() {
        firebase.auth().signInWithPopup(authProvider);
      }

    return (
        <main className="login-screen">
            { user ?
          <>
            {user.displayName} {' '}
            (<Link to="/HomeScreen">Home</Link>) {' '}
            <button onClick={logout}>Sign Out</button>
          </> :
          <button className="SignInButton" onClick={signIn}>Sign in with Google</button>
        }
        </main>
    )
}

export default LoginScreen;