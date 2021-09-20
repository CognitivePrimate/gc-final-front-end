import { EmergencyContact } from "../../Model/Interfaces"
import './EmergencyContactItem.css';

// icons
import deleteIcon from "../../Icons/delete.svg";



interface Props {
    emergencyContact: EmergencyContact
    deleteReport: () => void;
}

const EmergencyContactItem = ({emergencyContact, deleteReport}: Props) => {
    
    return(
        <main className="EmergencyContactItemContainer">
            <section>
                <section>
                    <div>{emergencyContact.firstName}</div>
                    <button className="DeleteButton" type="button" onClick={deleteReport}><img src={deleteIcon} alt="delete button" /></button>
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