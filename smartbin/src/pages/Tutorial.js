import '../style/Tutorial.css'
import Step1Disposal from '../images/Step1Disposal.png';
import Step2Sensor from '../images/Step2Sensor.png';
import Step3SwipeCard from '../images/Step3SwipeCard.png';
import Step4Points from '../images/Step4Points.png';
import Step5Reward from '../images/Step5Reward.png';
import Step6Enjoy from '../images/Step6Enjoy.png';

const Tutorial = () => {
    return(
        <div className='Tutorial'>
            <p className='header-text'>Eyes here for the step-by-step eco friendly disposal:</p>
            <div className='card-container'>
                <div className='img-container'>
                    <div className='circle'></div>
                    <img src={Step1Disposal} />
                </div>
                <div className='text-container'>
                    <p className='inter-font'>Open the lid and deposit the waste in the bin's main section.</p>
                </div>
            </div>

            <div className='card-container'>
                <div className='img-container'>
                    <div className='circle'></div>
                    <img src={Step2Sensor} />
                </div>
                <div className='text-container'>
                    <p className='inter-font'>Wait for the bin's sensor detect and sort the waste automatically.</p>
                </div>
            </div>

            <div className='card-container'>
                <div className='img-container'>
                    <div className='circle'></div>
                    <img src={Step3SwipeCard} />
                </div>
                <div className='text-container'>
                    <p className='inter-font'>Swipe your card for automatic points update, as the system detects your use of the smart bin.</p>
                </div>
            </div>

            <div className='card-container'>
                <div className='img-container'>
                    <div className='circle'></div>
                    <img src={Step4Points} />
                </div>
                <div className='text-container'>
                    <p className='inter-font'>Check and redeem points via app or designated center</p>
                </div>
            </div>

            <div className='card-container'>
                <div className='img-container'>
                    <div className='circle'></div>
                    <img src={Step5Reward} />
                </div>
                <div className='text-container'>
                    <p className='inter-font'>Use your card or app to join rewards program.</p>
                </div>
            </div>
            
            <div className='card-container'>
                <div className='img-container'>
                    <div className='circle'></div>
                    <img src={Step6Enjoy} />
                </div>
                <div className='text-container'>
                    <p className='inter-font'>Enjoy the benefits for your eco-friendly waste disposal.</p>
                </div>
            </div>
        </div>
    );
};

export default Tutorial;