import { EmergencyContact } from "../../Model/Interfaces"
import './EmergencyContactItem.css';

// icons
import deleteIcon from "../../Icons/delete.svg";
import { useState } from "react";
import EmergencyContactsUpdater from "../EmergencyContactsUpdater/EmergencyContactsUpdater";
import DeleteButton from "../ButtonComponents/DeleteButton/DeleteButton";



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
                <section className="NameUpdateSection">
                    <section>
                        
                        <p><b>Name:</b> {emergencyContact.firstName} {emergencyContact.lastName}</p>
                        <p><b>Phone:</b> {emergencyContact.phoneNumber}</p>
                        <p><b>Email:</b> {emergencyContact.email}</p>
                        <p><b>Role:</b> {emergencyContact.role}</p>
                    </section>
                    <section className="UpdateDeleteSection">
                            <EmergencyContactsUpdater
                                contact={emergencyContact}
                                updateForm={updateForm}
                                updateEmergencyContact={updateEmergencyContact}
                                updateHidden={handleHidden}
                            />
                            <DeleteButton
                                deleteReport={deleteContact}
                            />
                    </section>
                </section>
            </section>
        </main>
    )
}


export default EmergencyContactItem;