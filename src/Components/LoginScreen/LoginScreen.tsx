import firebase from "../../firebaseConfig";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthUser } from "../../ContextProviders/auth-context";
import { authProvider } from "../../firebaseConfig";
import { UserLogin } from "../../Model/Interfaces";
import "./LoginScreen.css";
import HomeScreen from "../HomeScreen/HomeScreen";


const LoginScreen = () => {

    const user = useAuthUser()

    // Hidden Class for HomeScreen and UserAuth


    const [ loginScreen, setLoginScreen ] = useState({
        HomeScreenVisible: 'hidden',
        HomeIconVisible: ''
    })

    function logout() {
        firebase.auth().signOut().then(() => setLoginScreen({HomeScreenVisible: 'hidden', HomeIconVisible: ''}))
      }

    function signIn() {
        firebase.auth().signInWithPopup(authProvider).then(() => setLoginScreen({HomeScreenVisible: '', HomeIconVisible: 'hidden'}))
      }



    return (
        <main className="login-screen">
        { user ?
          <section className="SignedInSection">
              <div className="StylishDivSize3"></div>
              <div className="StylishDivSize3"></div>
              <div className="StylishDivSize3"></div>
              <div className="StylishDivSize3"></div>
              <div className="StylishDivSize3"></div>
              <div className="StylishDivSize3"></div>
              <div className="StylishDivSize3"></div>
              <div className="StylishDivSize3"></div>
              <div className="StylishDivSize3"></div>
            <span className="signOutButton" onClick={logout}>Sign Out</span>
          </section> :
          <section className="SignedInSection">
              <div className="StylishDivSize3"></div>
            <span className="SignInButton" onClick={signIn}>Sign in with Google</span>
          </section>
          
          
        }
        <section >
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
        </section>
        <section>
            <HomeScreen/>
        </section>
        </main>
    )
}

export default LoginScreen;