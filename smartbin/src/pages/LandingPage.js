import homedesign from "../images/homedesign.png";
const LandingPage = () => {
    return(
        <div className="landingPage">
            <p>“Mindful waste disposal paves the way for a cleaner, greener world. Your responsible choices make a difference”</p>
            <div >
                <img className="center-item" style={{ minWidth:'70vw'}}  src={homedesign} alt="bottom design" />
            </div>
        </div>
    );
};

export default LandingPage;