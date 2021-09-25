import './DeleteButton.css';

// Icons
import deleteIcon from "../../../Icons/delete.svg";


interface Props {
    deleteReport: () => void;
}

const DeleteButton = ({deleteReport}: Props) => {

    return (
        <main className="DeleteButtonContainer">
            <button className="DeleteButton" type="button" onClick={deleteReport}><img src={deleteIcon} alt="delete button" /></button>
        </main>
    )
}

export default DeleteButton;