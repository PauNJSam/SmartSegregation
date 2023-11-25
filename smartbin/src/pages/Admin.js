import { useRef, useState } from 'react';
import { db } from '../config/firebaseConfig';   
import { set, ref, onValue, remove } from 'firebase/database';

const Admin = () => {

    const write = () => {
    /*     const uuid = 'USERS';
        set(ref(db, `/${uuid}`), {
            studentId: userUIDRef.current.value,
            points: 123
        })*/
    }; 

    return(
        <div className='Admin'>
            <p>This is the Admin Page</p>
        </div>
    );
};
export default Admin;