

import './ModalCloseButton.css';

interface Props {
    updateHidden: () => void;
}


const ModalCloseButton = ({updateHidden}: Props) => {

    return (
        <main className="ModalCloseMain">
            <section className="ModalCloseButtonSection">
                <button className="ModalCloseButton"onClick={updateHidden}>X</button>
            </section>
        </main>
    )
}


export default ModalCloseButton;