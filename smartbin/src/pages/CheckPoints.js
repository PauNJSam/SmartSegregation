import { db } from '../config/firebaseConfig';   
import { set, ref, onValue, remove } from 'firebase/database';

const CheckPoints = () => {

    const write = () => {
        const uuid = 'randomuuid';
        set(ref(db, `/${uuid}`), {
            studentId: '18-0374-953',
            points: 123
        })
    };

    return(
        <div>
            <p>The Check Your Points</p>
            <button type="button" onClick={write}>Write to Database</button>
        </div>
    );
};

export default CheckPoints;