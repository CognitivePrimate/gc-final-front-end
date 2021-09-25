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

    // let HomeScreenVisible = 'hidden';
    // let HomeIconVisible = '';

    // const [ loginScreen, setLoginScreen ] = useState()

    function logout() {
        firebase.auth().signOut();
        // HomeScreenVisible = 'hidden';
        // HomeIconVisible = ''
      }

    function signIn() {
        firebase.auth().signInWithPopup(authProvider);
        // HomeScreenVisible = ''
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
        {/* <section className={HomeIconVisible}> */}
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
        {/* </section> */}
        {/* <section className={HomeScreenVisible}> */}
            <HomeScreen/>
        {/* </section> */}
        </main>
    )
}

export default LoginScreen;