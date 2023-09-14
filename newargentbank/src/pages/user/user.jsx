import './user.scss'
import Account from '../../components/account/account'
import { useEffect } from 'react';
import { profileAPI } from '../../reduxfeatures/authAPI';
import { setUser } from '../../reduxfeatures/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFirstName, selectLastName, selectToken  } from '../../selector';

import store from '../../store';


function User() {

    const accounts = [
        { text: 'Checking (x8349)', amount: 2082.79, balanceType: 'available' },
        { text: 'Savings (x6712)', amount: 10928.42, balanceType: 'available' },
        { text: 'Credit Card (x8349)', amount: 184.20, balanceType: 'current' },
      ];
    
    const dispatch = useDispatch()
    
    const token = useSelector(selectToken)
    const firstName = useSelector(selectFirstName)
    const lastName = useSelector(selectLastName)

    console.log('last getState', store.getState())

    useEffect(() => {
        profileAPI(token)

        .then(data => {
            const { firstName, lastName } = data.body;
             dispatch(setUser({firstName, lastName}));
        })
        
    },[token, dispatch])

    return(
        <>
            <div className='bg-dark'>
                <div className="header">
                    <h1>Welcome back<br/>{firstName} {lastName} !</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                
                {accounts.map((account, index) => (
                    <Account key={index} text={account.text} amount={account.amount} balanceType={account.balanceType}/>
                ))}
            </div>
        </>
    )
}

export default User