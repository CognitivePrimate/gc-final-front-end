import { EmergencyContact } from "../../Model/Interfaces"
import './EmergencyContactItem.css';

// icons
import deleteIcon from "../../Icons/delete.svg";
import { useState } from "react";
import EmergencyContactsUpdater from "../EmergencyContactsUpdater/EmergencyContactsUpdater";



interface Props {
    emergencyContact: EmergencyContact
    deleteContact: () => void;
    updateEmergencyContact: (pendingContact: EmergencyContact) => void;
}

const EmergencyContactItem = ({emergencyContact, deleteContact, updateEmergencyContact}: Props) => {

    // state controlling if modal is seen or not.
    const [updateForm, setUpdateForm] = useState<string>("hidden");


    // update hidden through state
    const handleHidden = () => {
        if(updateForm === "hidden"){
            setUpdateForm("ShiftUpdaterForm");
        } else if(updateForm === "ShiftUpdaterForm"){
            setUpdateForm("hidden");
        }
    }


    
    return(
        <main className="EmergencyContactItemContainer">
            <section>
                <section>
                    <div>{emergencyContact.firstName}</div>
                    <section>
                        <button className="DeleteButton" type="button" onClick={deleteContact}><img src={deleteIcon} alt="delete button"/></button>
                        <section>
                            <EmergencyContactsUpdater
                                contact={emergencyContact}
                                updateForm={updateForm}
                                updateEmergencyContact={updateEmergencyContact}
                                updateHidden={handleHidden}
                            />
                        </section>
                    </section>
                </section>
                <div>{emergencyContact.lastName}</div>
                <div>Phone # {emergencyContact.phoneNumber}</div>
                <div>Email: {emergencyContact.email}</div>
                <div>Role: {emergencyContact.role}</div>
            </section>
        </main>
    )
}


export default EmergencyContactItem;