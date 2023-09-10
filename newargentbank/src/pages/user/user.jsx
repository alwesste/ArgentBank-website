import './user.scss'
import Account from '../../components/account/account'


function User() {

    const accounts = [
        { text: 'Checking (x8349)', amount: 2082.79, balanceType: 'available' },
        { text: 'Savings (x6712)', amount: 10928.42, balanceType: 'available' },
        { text: 'Credit Card (x8349)', amount: 184.20, balanceType: 'current' },
      ];

    return(
        <>
            <div className='bg-dark'>
                <div className="header">
                    <h1>Welcome back<br/>Tony Jarvis!</h1>
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