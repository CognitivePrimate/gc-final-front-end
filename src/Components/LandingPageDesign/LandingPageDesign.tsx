import './LandingPageDesign.css';
import SkedManIcon from './SkedManIcon/SkedManIcon';



const LandingPageDesign = () => {

    let Div1 = "StylishDivSize1";
    let Div2 = "StylishDivSize2"

    return (
        <main className="LandingPageDesignContainer">
            <section >
                <section className="StylishDivsContainerSize2">
                    <div className={Div2}></div>
                    <div className={Div2}></div>
                    <div className={Div2}></div>
                    <div className={Div2}></div>
                    <div className={Div2}></div>
                    <div className={Div2}></div>
                    <div className={Div2}></div>
                    <div className={Div2}></div>
                </section>
                {/* <section className="StylishDivsContainerSize1">
                    <div className={Div1}></div>
                    <div className={Div1}></div>
                    <div className={Div1}></div>
                    <div className={Div1}></div>
                </section> */}

                <SkedManIcon/>
                {/* <section className="StylishDivsContainerSize1">
                    <div className={Div1}></div>
                    <div className={Div1}></div>
                    <div className={Div1}></div>
                    <div className={Div1}></div>
                </section> */}
                <section className="StylishDivsContainerSize2">
                    <div className={Div2}></div>
                    <div className={Div2}></div>
                    <div className={Div2}></div>
                    <div className={Div2}></div>
                    <div className={Div2}></div>
                    <div className={Div2}></div>
                    <div className={Div2}></div>
                    <div className={Div2}></div>
                </section>
            </section>
        </main>

    )
}

export default LandingPageDesign;