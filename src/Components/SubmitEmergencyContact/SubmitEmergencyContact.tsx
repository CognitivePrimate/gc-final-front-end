


const SubmitEmergencyContact = () => {

    


    return(
        <main>
            <form action="submit">
                <div>
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" name="first-name" id="first-name"/>
                </div>
                <div>
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" name="last-name" id="last-name"/>
                </div>
                <div>
                    <label htmlFor="phone-number">Phone Number:</label>
                    <input type="text" name="phone-number" id="phone-number"/>
                </div>
                <div>
                    <label htmlFor="email">E-Mail:</label>
                    <input type="text" name="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="contact-role">Role:</label>
                    <input type="text" name="contact-role" id="contact-role"/>
                </div>
            </form>

        </main>
    )
}


export default SubmitEmergencyContact;