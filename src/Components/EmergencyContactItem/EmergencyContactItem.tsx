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
                <div>{emergencyContact.phoneNumber}</div>
                <div>{emergencyContact.email}</div>
                <div>{emergencyContact.role}</div>
            </section>
        </main>
    )
}


export default EmergencyContactItem;