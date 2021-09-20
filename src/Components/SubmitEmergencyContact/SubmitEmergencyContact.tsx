import { ObjectId } from "mongodb";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthUser } from "../../ContextProviders/auth-context";
import { EmergencyContact } from "../../Model/Interfaces";
import { addEmergencyContact } from "../../services";
import './SubmitEmergencyContact.css';



const SubmitEmergencyContact = () => {

   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [role, setRole] = useState("");
   const [email, setEmail] = useState("");

   const user = useAuthUser();

   const onSubmit = (emergencyContact: EmergencyContact) => {
       console.log(emergencyContact);
       addEmergencyContact(emergencyContact);
   }

    const handlesubmit = (e: FormEvent) => {
        e.preventDefault();
        
        onSubmit({
            user,
            firstName,
            lastName,
            phoneNumber,
            email,
            role
        });
        // onClose();
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setRole("");
        setEmail("");
    } 


    const newFirstName = (e: any) => setFirstName(e.target.value);
    const newLastName = (e: any) => setLastName(e.target.value);
    const newPhoneNumber = (e: any) => setPhoneNumber(e.target.value);
    const newEmail = (e: any) => setEmail(e.target.value);
    const newRole = (e: any) => setRole(e.target.value);

    

    return(
        <main className="EmergencyContactContainer">
            <form className="InputForm" action="submit" onSubmit={handlesubmit}>
                <h3 className="ContactTitle">Add Emergency Contact</h3>
                <div className="ContactLabelInputContainer">
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" name="first-name" id="first-name" value={firstName} onChange={newFirstName}/>
                </div>
                <div className="ContactLabelInputContainer">
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" name="last-name" id="last-name" value={lastName} onChange={newLastName}/>
                </div>
                <div className="ContactLabelInputContainer">
                    <label htmlFor="phone-number">Phone Number:</label>
                    <input type="text" name="phone-number" id="phone-number" value={phoneNumber} onChange={newPhoneNumber}/>
                </div>
                <div className="ContactLabelInputContainer">
                    <label htmlFor="email">E-Mail:</label>
                    <input type="text" name="email" id="email" value={email} onChange={newEmail}/>
                </div>
                <div className="ContactLabelInputContainer">
                    <label htmlFor="contact-role">Role:</label>
                    <input type="text" name="contact-role" id="contact-role" value={role} onChange={newRole}/>
                </div>
                <section className="SubmitButtonContainer">
                    <button className="SubmitButton" onClick={handlesubmit}>Add Emergency Contact</button>
                </section>
            </form>
            <section className="BackButtonLinkContainer">
                <Link to="/HomeScreen"><button className="BackButton">Back</button></Link>
            </section>

        </main>
    )
}


export default SubmitEmergencyContact;