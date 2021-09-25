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
          <section className="SignedInSection">
            {/* <div>
                {user.displayName} {' '}
                (<Link to="/HomeScreen">Home</Link>) {' '}
            </div>
            <button onClick={logout}>Sign Out</button> */}
            <span className="signOutButton" onClick={logout}>Sign Out</span>
          </section> :
          <button className="SignInButton" onClick={signIn}>Sign in with Google</button>
          
          
        }
        <section className="StylishDivsContainerSize2">
            <div className="StylishDivSize2"></div>
            <div className="StylishDivSize2"></div>
            <div className="StylishDivSize2"></div>
            <div className="StylishDivSize2"></div>
            <div className="StylishDivSize2"></div>
            <div className="StylishDivSize2"></div>
            <div className="StylishDivSize2"></div>
            <div className="StylishDivSize2"></div>
        </section>
        <section className="StylishDivsContainerSize1">
            <div className="StylishDivSize1"></div>
            <div className="StylishDivSize1"></div>
            <div className="StylishDivSize1"></div>
            <div className="StylishDivSize1"></div>
            <div className="StylishDivSize1"></div>
        </section>
        <section className="HeroShotLoginSection">
            <div className="HeroShotLoginDiv">
                <h2 className="AppName">SkedMan</h2>
            </div>
        </section>
        <section className="StylishDivsContainerSize1">
            <div className="StylishDivSize1"></div>
            <div className="StylishDivSize1"></div>
            <div className="StylishDivSize1"></div>
            <div className="StylishDivSize1"></div>
            <div className="StylishDivSize1"></div>
        </section>
        <section className="StylishDivsContainerSize2">
            <div className="StylishDivSize2"></div>
            <div className="StylishDivSize2"></div>
            <div className="StylishDivSize2"></div>
            <div className="StylishDivSize2"></div>
            <div className="StylishDivSize2"></div>
            <div className="StylishDivSize2"></div>
            <div className="StylishDivSize2"></div>
            <div className="StylishDivSize2"></div>
        </section>

        </main>
    )
}

export default LoginScreen;