import './ResetButton.css';

// Icon
import refreshIcon from "../../../Icons/refresh.svg";

interface Props {
    resetSearch: () => void;
}


const ResetFilterButton = ({resetSearch}: Props) => {

    return(
        <main className="ResetMainContainer">
            <section className="ResetButtonContainer">
                <button className="ResetButton" onClick={resetSearch}><img src={refreshIcon} alt="Refresh"/></button>
            </section>
        </main>
    )
}

export default ResetFilterButton;