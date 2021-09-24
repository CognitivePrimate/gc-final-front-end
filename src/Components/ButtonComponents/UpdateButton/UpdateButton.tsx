


// Icon
import editIcon from "../../../Icons/edit.svg";


interface Props {
    updateHidden: () => void;
}

const UpdateButton = ({updateHidden}: Props) => {

    return(
        <main className="UpdateButtonContainer">
          <button className="ModalToggle" onClick={updateHidden}><img src={editIcon} alt="edit icon" /></button>
        </main>
    )
}

export default UpdateButton;