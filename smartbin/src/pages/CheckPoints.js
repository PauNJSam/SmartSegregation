import { useRef, useState, useEffect } from 'react';
import { db } from '../config/firebaseConfig';   
import { set, ref, onValue, remove } from 'firebase/database';
import { getDatabase, child, get } from "firebase/database";
import bag from '../images/eco_bag.jpg';
import cup from '../images/eco_cup.png';
import pens from '../images/eco_pens.jpg';
import toothbrush from '../images/eco_toothbrush.jpg';
import utensils from '../images/eco_utensils.jpg';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

const CheckPoints = () => {
    const [userPoints, setUserPoints] = useState(null);
    const userUIDRef = useRef();
    const [warning, setWarning] = useState(false);
    
    const navigate = useNavigate();

    const readPoints = async () => {
        
        try{
            const pointsRef = ref(db, `${userUIDRef.current.value}/`, 'studentID');
                onValue(pointsRef, (snapshot) => {
                    if(snapshot.val()!==null){
                        const data = snapshot.val();
                        setUserPoints(data.points);
                        setWarning(false);
                    }else{
                        setWarning(true);
                        setUserPoints(null);
                    }
                });
        }catch(err){
            console.log(err.message);
        }
        
        // const dbRef = ref(getDatabase());
        /* get(child(db, `${userUIDRef.current.value}/`, 'studentID')).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        }); */

    };

    const getPrize = (points) => {
        navigate(`/getPrize/${points}`);
    };

    

    return(
        <div className='CheckPoints'>
            <p>The Check How Much Points You Earned!</p>
            <input type='text' ref={userUIDRef} />
            <button type="button" onClick={readPoints}>Check</button>
            <div>
                <p>You have a total of</p>
                {
                    userPoints == null ? null : <p>{userPoints}</p>
                }
                {
                    warning && <p>warning</p>
                }
                <p>points</p>
            </div>
            <div>
                <p>Prizes to collect</p>
                <section>
                    <article>
                        <img src={bag} alt='bag' onClick={()=>{getPrize(80)}} />
                        <p>80 points</p>
                    </article>
                    <article>
                        <img src={cup} alt='cup' onClick={()=>{getPrize(50)}}  />
                        <p>50 points</p>
                    </article>
                    <article>
                        <img src={toothbrush} alt='toothbrush' onClick={()=>{getPrize(40)}}  />
                        <p>40 points</p>
                    </article>
                    <article>
                        <img src={utensils} alt='utensils' onClick={()=>{getPrize(60)}}  />
                        <p>60 points</p>
                    </article>
                    <article>
                        <img src={pens} alt='pens' onClick={()=>{getPrize(100)}}  />
                        <p>100 points</p>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default CheckPoints;