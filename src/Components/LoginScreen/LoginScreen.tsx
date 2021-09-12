import "./LoginScreen.css";


const loginScreen = () => {

    return (
        <main className="login-main">
            <form className="login-form" action="submit">
                <h3 className="login-title">App Name</h3>
                

                <section className="login-section">
                    <label htmlFor="username-login" className="login-label">Username</label>
                    <input type="text" name="username-login" id="username-login" className="login-input"/>
                </section>
                <section className="login-section">
                    <label htmlFor="password-login" className="login-label">Password</label>
                    <input type="text" name="password-login" id="password-login" className="login-input"/>
                </section>
                <section className="login-section">
                    <button className="login-submit-button">Submit</button>
                </section>
            </form>
        </main>
    )
}

export default loginScreen;