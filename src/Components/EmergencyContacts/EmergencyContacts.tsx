import { useEffect, useState } from "react";
import { EmergencyContact } from "../../Model/Interfaces";
import { fetchEmergencyContacts } from "../../services";
import EmergencyContactItem from "../EmergencyContactItem/EmergencyContactItem";



const EmergencyContacts = () => {

    const loadEmergencyContacts = () => {
        fetchEmergencyContacts().then(setEmergencyContactList);
    }

    const [emergencyContactList, setEmergencyContactList] = useState<EmergencyContact[]>([])
    useEffect(loadEmergencyContacts, []);

    return(
        <main>
            <section>
            {emergencyContactList.map((emergencyContact, index) =>
                    <EmergencyContactItem
                        key={emergencyContact.lastName}
                        emergencyContact={emergencyContact}
                        />
                )}
            </section>
        </main>
    )
}


export default EmergencyContacts;