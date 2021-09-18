import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            <section className="BackButtonLinkContainer">
                <Link to="/HomeScreen"><button className="BackButton">Back</button></Link>
            </section>
        </main>
    )
}


export default EmergencyContacts;