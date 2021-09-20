import { EmergencyContact } from "../../Model/Interfaces"
import './EmergencyContactItem.css';



interface Props {
    emergencyContact: EmergencyContact
}

const EmergencyContactItem = ({emergencyContact}: Props) => {
    
    return(
        <main className="EmergencyContactItemContainer">
            <section>
                <div>{emergencyContact.firstName}</div>
                <div>{emergencyContact.lastName}</div>
                <div>Phone # {emergencyContact.phoneNumber}</div>
                <div>Email: {emergencyContact.email}</div>
                <div>Role: {emergencyContact.role}</div>
            </section>
        </main>
    )
}


export default EmergencyContactItem;