import './ResetButton.css';

// Icon
import refreshIcon from "../../../Icons/refresh.svg";

interface Props {
    resetSearch: () => void;
}


const ResetFilterButton = ({resetSearch}: Props) => {

    return(
        <section className="ResetButtonContainer">
            <button className="ResetButton" onClick={resetSearch}><img src={refreshIcon} alt="Refresh"/></button>
        </section>
    )
}

export default ResetFilterButton;