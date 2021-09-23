import { FormEvent, useState } from "react"
import { EmergencyContact } from "../../Model/Interfaces"
import { updateEmergencyContact } from "../../services"

import './EmergencyContactsUpdater.css';

// Icons
import editIcon from "../../Icons/edit.svg";



interface Props {
    contact: EmergencyContact;
    updateHidden: () => void;
    updateForm: string;
    updateEmergencyContact: (contact: EmergencyContact) => void;
}


const EmergencyContactsUpdater = ({contact, updateForm, updateHidden, updateEmergencyContact}: Props) => {

    const [pendingContact, setPendingContact] = useState<EmergencyContact>({
        ...contact
    })


    const preventReload = (e: FormEvent) => {
        e.preventDefault();
        updateEmergencyContact(pendingContact);

        // separation of concerns. Parent shouldn't be concerned //
    }

    return (
        <main className="EmergencyContactsUpdaterContainer">
            <section>
                <button onClick={updateHidden}><img src={editIcon} alt="edit icon" /></button>
            </section>
            <section className={updateForm}>
                <form className="InputFormUpdater" action="submit" onSubmit={preventReload}>
                    <section>
                        <button onClick={updateHidden}>X</button>
                    </section>
                    <h3 className="ContactTitle">Add Emergency Contact</h3>
                    <div className="ContactLabelInputContainer">
                        <label htmlFor="first-name">First Name:</label>
                        <input type="text" name="first-name" id="first-name" value={pendingContact.firstName} onChange={(e) => setPendingContact({...contact, firstName: e.target.value})}/>
                    </div>
                    <div className="ContactLabelInputContainer">
                        <label htmlFor="last-name">Last Name:</label>
                        <input type="text" name="last-name" id="last-name" value={pendingContact.lastName} onChange={(e) => setPendingContact({...contact, lastName: e.target.value})}/>
                    </div>
                    <div className="ContactLabelInputContainer">
                        <label htmlFor="phone-number">Phone Number:</label>
                        <input type="text" name="phone-number" id="phone-number" value={pendingContact.phoneNumber} onChange={(e) => setPendingContact({...contact, phoneNumber: e.target.value})}/>
                    </div>
                    <div className="ContactLabelInputContainer">
                        <label htmlFor="email">E-Mail:</label>
                        <input type="text" name="email" id="email" value={pendingContact.email} onChange={(e) => setPendingContact({...contact, email: e.target.value})}/>
                    </div>
                    <div className="ContactLabelInputContainer">
                        <label htmlFor="contact-role">Role:</label>
                        <input type="text" name="contact-role" id="contact-role" value={pendingContact.role} onChange={(e) => setPendingContact({...contact, role: e.target.value})}/>
                    </div>
                    <section className="SubmitButtonContainer">
                        <button className="SubmitButton" onClick={preventReload}>Add Emergency Contact</button>
                    </section>
                </form>
            </section>
        </main>
    )
}


export default EmergencyContactsUpdater;