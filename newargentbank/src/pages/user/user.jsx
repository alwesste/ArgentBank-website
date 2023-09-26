import './user.scss'
import Account from '../../components/account/account';
import EditUser from '../../components/EditUser/EditUser';
import store from '../../store';

import { accounts } from '../../utils/variable';
import { useEffect, useState } from 'react';
import { profileAPI } from '../../authAPI';
import { setUser } from '../../reduxfeatures/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFirstName, selectLastName, selectToken  } from '../../selector';


function User() {

    const [editUserOn, setEditUserOn] = useState(false)

    function handleEdit(e) {
        e.preventDefault()
        setEditUserOn(!editUserOn)
    }
    
    const dispatch = useDispatch()
    
    const token = useSelector(selectToken)
    const firstName = useSelector(selectFirstName)
    const lastName = useSelector(selectLastName)

    console.log('last getState', store.getState())

    useEffect(() => {
        profileAPI(token)

        .then(data => {
            const { firstName, lastName, userName } = data.body;
            console.log(data.body)
            dispatch(setUser({firstName, lastName, userName}));
        })
        
    },[token, dispatch])

    return(
        <>
            {editUserOn && <EditUser />}

            <div className='bg-dark'>
                <div className="header">
                    <h1>Welcome back<br/>{firstName} {lastName} !</h1>
                    <button className="edit-button" onClick={handleEdit}>Edit Name</button>
                </div>
                
                {accounts.map((account, index) => (
                    <Account key={index} text={account.text} amount={account.amount} balanceType={account.balanceType}/>
                ))} 

          
                
            </div>
        </>
    )
}

export default User