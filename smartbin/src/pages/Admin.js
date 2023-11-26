import { useRef, useState, useEffect } from 'react';
import { db } from '../config/firebaseConfig';   
import { set, ref, onValue, remove } from 'firebase/database';

const Admin = () => {
    const loginInputRef = useRef();
    const [showMerchRequests, setShowMerchRequests] = useState(false);
    const [showIncorrectPass, setShowIncorrectPass] = useState(false);
    // const [merchRequestsData, setMerchRequestsData] = useState([]);
    const [merchRequestsData, setMerchRequestsData] = useState([]);
    const [newData, setNewData] = useState([]);

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
        } else {
            setShowIncorrectPass(true);
        }
    };

    const readMerchRequests = async () => {
        
        /* try{
            const pointsRef = ref(db, `MERCHREQUEST/`);
                onValue(pointsRef, (snapshot) => {
                    if(snapshot.val()!==null){
                        const data = snapshot.val();
                        if(data!=null){
                            Object.values(data).map((request)=>{
                                setMerchRequestsData((oldArray)=>[...oldArray,request]);
                                console.log(merchRequestsData);
                            })
                        }
                    }else{
                        console.log("data not found");
                    }
                });
                console.log("usessss");

        }catch(err){
            console.log(err.message);
        } */

       /*  try{
            const pointsRef = ref(db, `MERCHREQUEST/`);
                onValue(pointsRef, (snapshot) => {
                    if(snapshot.val()!==null){
                        const data = snapshot.val();
                        if(data!=null){
                            setMerchRequestsData(Object.values(data));
                            console.log(merchRequestsData);
                            setMerchRequestsData(data);
                            console.log(merchRequestsData);
                        }
                    }else{
                        console.log("data not found");
                    }
                });
                console.log("usessss");

        }catch(err){
            console.log(err.message);
        } */


        try{
            const pointsRef = ref(db, `MERCHREQUEST/`);
                onValue(pointsRef, (snapshot) => {
                    if(snapshot.val()!==null){
                        var req = [];
                        snapshot.forEach(childSnapshot => {
                            req.push(childSnapshot.val());
                            // console.log("child: ", childSnapshot.val());
                        })
                        // console.log("Req: ",req);
                        setMerchRequestsData(req);
                        // console.log("merchrequestData: ",merchRequestsData);
                    }else{
                        console.log("data not found");
                    }
                });
                console.log("usessss");

        }catch(err){
            console.log(err.message);
        }


        /* try{
            const pointsRef = ref(db, `MERCHREQUEST/`);
                onValue(pointsRef, (snapshot) => {
                    if(snapshot.val()!==null){
                        console.log("snapshotVal: ", snapshot.val());
                        snapshot.forEach(childSnapshot => {
                            setNewData((old)=>[...old, childSnapshot.val()]);
                            console.log("child: ", childSnapshot.val());
                            console.log('merchData', merchRequestsData);
                        })
                        newData.forEach(element=>{
                            makeData(element.userUID, element.merch, element.points);
                            console.log("New Data",element);
                        });
                        
                    }else{
                        console.log("data not found");
                    }
                });
                console.log("usessss");

        }catch(err){
            console.log(err.message);
        } */

    };
    /* const makeData = ({userUID, merch, points}) => {
        setMerchRequestsData((e)=>[...e, {userUID, merch, points}]);
    }; */

    const write = () => {
    /*     const uuid = 'USERS';
        set(ref(db, `/${uuid}`), {
            studentId: userUIDRef.current.value,
            points: 123
        })*/
    }; 

    return(
        <div className='Admin'>
            <div>
                <button type='button'>Back</button>
                <p>Admin</p>
            </div>
            <input ref={loginInputRef} type='password' placeholder='Enter password' />
            <button type='button' onClick={login}>Enter</button>
            {
                showIncorrectPass && <p>Password is INCORRECT</p>
            }
            {
                showMerchRequests && <section>
                    <div>
                        <p>User UID</p>
                        <p>Merch</p>
                    </div>
                    {
                        //TODO: ang data den 2 buttons sell and deny
                        merchRequestsData == null ? null : merchRequestsData.map((request)=>{
                            return(
                                <article key={crypto.randomUUID()}>
                                    {/* <p>safa {request.id}</p> */}
                                    <p>{request.userUID}</p>
                                    <p>{request.merch}</p>
                                    <p>{request.points}</p>
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