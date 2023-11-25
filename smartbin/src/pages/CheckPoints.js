import { useRef, useState, useEffect } from 'react';
import { db } from '../config/firebaseConfig';   
import { set, ref, onValue, remove } from 'firebase/database';
import { getDatabase, child, get } from "firebase/database";

const CheckPoints = () => {
    const [userPoints, setUserPoints] = useState(null);
    const userUIDRef = useRef();
    const [warning, setWarning] = useState(false);
    

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

    

    return(
        <div>
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
                <div>

                </div>
            </div>
        </div>
    );
};

export default CheckPoints;