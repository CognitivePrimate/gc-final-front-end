import { FormEvent, useState } from "react";
import { useAuthUser } from "../../ContextProviders/auth-context";
import { EmergencyContact } from "../../Model/Interfaces";
import { addEmergencyContact } from "../../services";
import BackButton from "../ButtonComponents/BackButton/BackButton";
import BreadCrumbButton from "../ButtonComponents/BreadCrumbButton/BreadCrumbButton";
import './SubmitEmergencyContact.css';



const SubmitEmergencyContact = () => {

   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [role, setRole] = useState("");
   const [email, setEmail] = useState("");

   const user = useAuthUser();

   // BreadCrumb Variables

   let buttonName= "Emergency Contacts";
   let linkRoute= "/EmergencyContacts";

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
                    <label htmlFor="first-name"></label>
                    <input type="text" name="first-name" id="first-name" value={firstName} onChange={newFirstName} placeholder="First Name"/>
                </div>
                <div className="ContactLabelInputContainer">
                    <label htmlFor="last-name"></label>
                    <input type="text" name="last-name" id="last-name" value={lastName} onChange={newLastName} placeholder="Last Name"/>
                </div>
                <div className="ContactLabelInputContainer">
                    <label htmlFor="phone-number"></label>
                    <input type="text" name="phone-number" id="phone-number" value={phoneNumber} onChange={newPhoneNumber} placeholder="Phone Number:"/>
                </div>
                <div className="ContactLabelInputContainer">
                    <label htmlFor="email"></label>
                    <input type="text" name="email" id="email" value={email} onChange={newEmail} placeholder="E-Mail"/>
                </div>
                <div className="ContactLabelInputContainer">
                    <label htmlFor="contact-role"></label>
                    <input type="text" name="contact-role" id="contact-role" value={role} onChange={newRole} placeholder="Role"/>
                </div>
                <section className="SubmitButtonContainer">
                    <button className="SubmitButton" onClick={handlesubmit}>Add Emergency Contact</button>
                </section>
                <section className="BackCrumbContainer">
                    <BackButton/>
                    <BreadCrumbButton
                        buttonName={buttonName}
                        linkRoute={linkRoute}
                    />
                </section>
            </form>

        </main>
    )
}


export default SubmitEmergencyContact;