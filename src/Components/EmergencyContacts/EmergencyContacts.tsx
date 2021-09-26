import { useEffect, useState } from "react";
import { EmergencyContact } from "../../Model/Interfaces";
import { deleteEmergencyContact, fetchEmergencyContacts, updateEmergencyContact } from "../../services";
import BackButton from "../ButtonComponents/BackButton/BackButton";
import EmergencyContactItem from "../EmergencyContactItem/EmergencyContactItem";
import "./EmergencyContacts.css";



const EmergencyContacts = () => {

    const loadEmergencyContacts = () => {
        fetchEmergencyContacts().then((res) => {
            setEmergencyContactList(res);
        });
    }

    const [emergencyContactList, setEmergencyContactList] = useState<EmergencyContact[]>([])
    useEffect(loadEmergencyContacts, []);

    const resetSearch = () => {
        loadEmergencyContacts();
    }

    const handleDelete = (contact: EmergencyContact) => {
        console.log(contact);
        console.log(contact._id)
        deleteEmergencyContact(contact);
        resetSearch();
        };
    
    
    const handleUpdate = (pendingContact: EmergencyContact) => {
        console.log(pendingContact);
        updateEmergencyContact(pendingContact);
        resetSearch();
    }

    
        

    return(
        <main className="EmergencyContactsContainer">
            <h3 className="SectionTitle">Emergency Contacts</h3>
            <section>
            {emergencyContactList.map((emergencyContact, index) =>
                    <EmergencyContactItem
                        key={`${emergencyContact.lastName}-${index}`}
                        emergencyContact={emergencyContact}
                        deleteContact={ () => handleDelete(emergencyContact)}
                        updateEmergencyContact={(pendingContact) => handleUpdate(pendingContact)}
                        />
                )}
            </section>
            <BackButton/>
        </main>
    )
}


export default EmergencyContacts;