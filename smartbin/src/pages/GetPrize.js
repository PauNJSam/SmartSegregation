import { useLocation, useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import bag from '../images/eco_bag.jpg';
import cup from '../images/eco_cup.png';
import pens from '../images/eco_pens.jpg';
import toothbrush from '../images/eco_toothbrush.jpg';
import utensils from '../images/eco_utensils.jpg';
import { useRef, useState, useEffect } from "react";
import { db } from '../config/firebaseConfig';   
import { set, ref, serverTimestamp } from 'firebase/database';


const GetPrize = () => {
    const pointsString = useLocation().pathname.split('/')[2];
    const merchPoints = pointsString;
    const [merchImage, setMerchImage] = useState(null);
    const [merchName, setMerchName] = useState(null);
    const userUIDRef = useRef();

    const navigate = useNavigate();

    useEffect(() => {
        console.log(merchPoints);
        if(merchPoints==40){
            setMerchImage(toothbrush);
            setMerchName("Eco ToothBrush");
            console.log(merchImage, merchName);
        } else if(merchPoints==50){
            setMerchImage(cup);
            setMerchName("Eco Cup");
        } else if(merchPoints==60){
            setMerchImage(utensils);
            setMerchName("Eco Utensils");
        } else if(merchPoints==80){
            setMerchImage(bag);
            setMerchName("Eco Bag");
        } else if(merchPoints==100){
            setMerchImage(pens);
            setMerchName("Eco Pens");
        };
      
    }, [merchImage, merchName]);

    const confirmMerch = () => {
        //TODO: Check first if uuid inputted exists
        // const time = serverTimestamp().toDate().toLocaleString();
        const randomID =  crypto.randomUUID();
        console.log(randomID);
        set(ref(db, 'MERCHREQUEST/' + randomID), {
            userUID: userUIDRef.current.value,
            merch: merchName,
            points: merchPoints
        }).then(()=>{
            alert("Requested Merchandise sent successfully.");
            navigate('/checkPoints');
        }).catch(()=>{
            console.log("Sorry was not able to send merchandise request");
        })
    };

    const goBackToPointsPage = () => {
        navigate('/checkPoints');
    }
    

    return(
        <section className="GetPrize">
            <div>
                <button type="button" onClick={goBackToPointsPage}>Back</button>
            </div>
            <div>
                <p>Merch Selected:</p>
                <div>
                    {merchImage && <img src={merchImage} alt="merch"/>}
                </div>
                <p>{merchName}</p>
                <p>Worth</p>
                <p>{merchPoints}</p>
                <p>Points</p>
            </div>
            <div>
                <p>To get merch</p>
                <input ref={userUIDRef} type="text" placeholder="Enter RFID UUID" />
                <button type="button" onClick={confirmMerch}>Enter</button>
            </div>
            <div>
                <p>Instructions:</p>
                <p>Lorem Ipsum akjdnfa sdfa jnow jnan  yhyhdf nina</p>
            </div>
        </section>
    );
};
export default GetPrize;