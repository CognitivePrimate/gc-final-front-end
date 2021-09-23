import firebase from "../../firebaseConfig";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthUser } from "../../ContextProviders/auth-context";
import { authProvider } from "../../firebaseConfig";
import { UserLogin } from "../../Model/Interfaces";
import "./LoginScreen.css";


const LoginScreen = () => {

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
          <section>
            {user.displayName} {' '}
            (<Link to="/HomeScreen">Home</Link>) {' '}
            <button onClick={logout}>Sign Out</button>
          </section> :
          <button className="SignInButton" onClick={signIn}>Sign in with Google</button>
          
          
        }
        <section className="HeroShotLoginDiv">
            <div className="HeroShotLoginDiv">
                <h2>SkedMan</h2>
            </div>
        </section>

        </main>
    )
}

export default LoginScreen;