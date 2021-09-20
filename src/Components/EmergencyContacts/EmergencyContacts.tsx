import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EmergencyContact } from "../../Model/Interfaces";
import { deleteEmergencyContact, fetchEmergencyContacts } from "../../services";
import EmergencyContactItem from "../EmergencyContactItem/EmergencyContactItem";



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

    return(
        <main>
            <section>
            {emergencyContactList.map((emergencyContact, index) =>
                    <EmergencyContactItem
                        key={`${emergencyContact.lastName}-${index}`}
                        emergencyContact={emergencyContact}
                        deleteReport={ () => handleDelete(emergencyContact)}
                        />
                )}
            </section>
            <section className="BackButtonLinkContainer">
                <Link to="/HomeScreen"><button className="BackButton">Back</button></Link>
            </section>
        </main>
    )
}


export default EmergencyContacts;