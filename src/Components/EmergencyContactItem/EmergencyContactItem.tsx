import { EmergencyContact } from "../../Model/Interfaces"



interface Props {
    emergencyContact: EmergencyContact
}

const EmergencyContactItem = ({emergencyContact}: Props) => {
    
    return(
        <main>
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