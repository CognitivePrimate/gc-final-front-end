
import closeIcon from "../../../Icons/closeIcon.png";

interface Props {
    updateHidden: () => void;
}



const CloseButton = ({updateHidden}: Props) => {

    return(
        <section className="UpdateClickableSection">
                        <div className="UpdateClickableDiv"onClick={updateHidden}><img src={closeIcon} alt="X" /></div>
        </section>
    )
}


export default CloseButton;