import firebase from "../../firebaseConfig";
import { useState } from "react";
import { useAuthUser } from "../../ContextProviders/auth-context";
import { authProvider } from "../../firebaseConfig";
import "./LoginScreen.css";
import HomeScreen from "../HomeScreen/HomeScreen";
import LandingPageDesign from "../LandingPageDesign/LandingPageDesign";
import DesktopFooter from "../DesktopFooter/DesktopFooter";


const LoginScreen = () => {

    const user = useAuthUser()

    // Hidden Class for HomeScreen and UserAuth


    // const [ loginScreen, setLoginScreen ] = useState({
    //     HomeScreenVisible: 'hidden',
    //     HomeIconVisible: ''
    // })

    // function logout() {
    //     firebase.auth().signOut().then(() => setLoginScreen({HomeScreenVisible: 'hidden', HomeIconVisible: ''}))
    //     console.log(user);
    //   }

    // function signIn() {
    //     firebase.auth().signInWithPopup(authProvider).then(() => setLoginScreen({HomeScreenVisible: '', HomeIconVisible: 'hidden'}))
    //     console.log(user);
    //   }


    function logout() {
        firebase.auth().signOut()
        console.log(user);
      }

    function signIn() {
        firebase.auth().signInWithPopup(authProvider)
        console.log(user);
      }


    return (
        <main >
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
              <section className="SignOutButtonContainer">
                    <span className="signOutButton" onClick={logout}>Sign Out</span>
              </section>
          </section> :
          <section className="SignedOutSection">
            <section className="SignInButtonContainer">
                <span className="SignInButton" onClick={signIn}>Sign in with Google</span>
            </section>
            
          </section>
          
          
        }
        
        <section >
            {!user && <LandingPageDesign/>}
        </section>
        <section>
            {user && <HomeScreen/>}
        </section>
        <section>
            {user && <DesktopFooter/>}
        </section>
        </main>
    )
}

export default LoginScreen;