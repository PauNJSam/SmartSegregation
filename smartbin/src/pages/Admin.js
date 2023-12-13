import { useRef, useState, useEffect } from 'react';
import { db } from '../config/firebaseConfig';   
import { set, ref, onValue, remove, update } from 'firebase/database';

const Admin = () => {
    const loginInputRef = useRef();
    const [showMerchRequests, setShowMerchRequests] = useState(false);
    const [showIncorrectPass, setShowIncorrectPass] = useState(false);
    // const [merchRequestsData, setMerchRequestsData] = useState([]);
    const [merchRequestsData, setMerchRequestsData] = useState([]);
    const [newData, setNewData] = useState([]);
    const [showLogIn, setShowLogIn] = useState(false);
    // const [userPoints, setUserPoints] = useState(null);

    //TODO: add a auth token for refresh or not na lng

    useEffect(() => {
      readMerchRequests();
      console.log("useEffect has run");
    
      
    }, [])
    

    const login = () => {
        console.log(loginInputRef.current.value);
        if(loginInputRef.current.value == "asd"){
            setShowIncorrectPass(false);
            setShowMerchRequests(true);
            setShowLogIn(true);
            loginInputRef.current.value = '';
        } else {
            setShowIncorrectPass(true);
        }
    };

    const readMerchRequests = async () => {

        try{
            const pointsRef = ref(db, `MERCHREQUEST/`);
                onValue(pointsRef, (snapshot) => {
                    if(snapshot.val()!==null){
                        var req = [];
                        snapshot.forEach(childSnapshot => {
                            const key = childSnapshot.key; // Retrieve the object key
                            const data = { key, ...childSnapshot.val() }; // Include key in the data
                            req.push(data);
                            
                        })
                        
                        setMerchRequestsData(req);
                        console.log("merchrequestData: ",merchRequestsData);
                    }else{
                        console.log("data not found");
                    }
                });
                console.log("usessss");

        }catch(err){
            console.log(err.message);
        }


    };
    
    const readPoints = (userUID) => {
        return new Promise((resolve, reject) => {
            try {
                const pointsRef = ref(db, `${userUID}/`, 'points');
                onValue(pointsRef, (snapshot) => {
                    if (snapshot.val() !== null) {
                        const data = snapshot.val();
                        const thePoints = parseInt(data.points, 10);
                        console.log(thePoints);
                        resolve(thePoints);
                    } else {
                        resolve(null);
                    }
                });
            } catch (err) {
                console.log(err.message);
                reject(err);
            }
        });
    };
    const confirmRequest = async (userUID, points, theKey) => {
        
        
        // console.log("newPoints", newPoints);
        try{
            const currentPoints = await readPoints(userUID);
            if(currentPoints!== null ){
                const newPoints = currentPoints-points;
                update(ref(db, `/${userUID}`), {
                    points: newPoints
                });
                console.log("UserPoints updated");
                remove(ref(db, 'MERCHREQUEST' +`/${theKey}`)).then(()=>{
                    readMerchRequests();
                }).catch((error) => {
                    console.error(error);
                });
                console.log("Merch Request Removed");
                alert("User points updated");
                
            }
        } catch(err){
            console.log(err.message);
        }
    };
    const declineRequest = (theKey) => {
        try{
            remove(ref(db, 'MERCHREQUEST/' +`${theKey}`)).then(()=>{
                readMerchRequests();
            }).catch((error) => {
                console.error(error);
            });
            alert('Request Removed');
            readMerchRequests();
        } catch(err){
            console.log(err.message);
        }
        
    };

    const logOut = () => {
        setShowMerchRequests(false);
        setShowLogIn(false);
    }

    return(
        <div className='Admin margin-container'>
            <div>
                {
                    showLogIn ? <button className='btn' type='button' onClick={logOut}>Log out</button> : null
                }
                <p className='page-label'>Admin</p>
            </div>
            {
                showLogIn ? null : <div className='center-div'>
                    <input className='input-btn center-dis' ref={loginInputRef} type='password' placeholder='Enter password' />
                    <button className='btn center-dis' type='button' onClick={login}>Enter</button>
                </div>
            }
            {
                showIncorrectPass && <p>Password is INCORRECT</p>
            }
            {
                showMerchRequests && <section>
                    
                    {
                        //TODO: ang data den 2 buttons sell and deny
                        merchRequestsData == null ? null : merchRequestsData.map((request)=>{
                            return(
                                <article className='list-container' key={crypto.randomUUID()}>
                                    <div className='merch-list-text'>
                                        {/* <p>key: {request.key}</p> */}
                                        <p>UID: {request.userUID}</p>
                                        <p>Merch: {request.merch}</p>
                                        <p>Merch Points: {request.points}</p>
                                    </div>
                                    <div>
                                    <button className='btn-decide' type='button' onClick={()=>confirmRequest(request.userUID, request.points, request.key)} >Item Sent</button>
                                    <button className='btn-decide btn-decline' type='button' onClick={()=>declineRequest(request.key)} >Decline Request</button>
                                    </div>
                                </article>
                            )
                        })
                    }
                </section>
            }
            
        </div>
    );
};
export default Admin;