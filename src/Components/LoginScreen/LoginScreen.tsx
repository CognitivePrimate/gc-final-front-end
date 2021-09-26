import firebase from "../../firebaseConfig";
import { useState } from "react";
import { useAuthUser } from "../../ContextProviders/auth-context";
import { authProvider } from "../../firebaseConfig";
import "./LoginScreen.css";
import HomeScreen from "../HomeScreen/HomeScreen";
import LandingPageDesign from "../LandingPageDesign/LandingPageDesign";


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
        <LandingPageDesign/>
        <section>
            <HomeScreen/>
        </section>
        </main>
    )
}

export default LoginScreen;