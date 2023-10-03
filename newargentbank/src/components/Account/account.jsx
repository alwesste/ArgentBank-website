import { useState } from 'react'
import { accountList, itemDescription } from '../../utils/variable'
import AccountList from '../../components/AccountList/AccountList';


import './account.scss'

function Account({amount, text, balanceType}) {

  const [listDisplay, setListDisplay] = useState(false)

  function handleButton() {
    setListDisplay(!listDisplay)
  }

    return(
      <>
        <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank {text}</h3>
              <p className="account-amount">${amount}</p>
              <p className="account-amount-description"> {balanceType} Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button onClick={handleButton} className="transaction-button">View transactions</button>
            </div>  

            
        </section>
        
        <div className='accountList'>
        {listDisplay && (
          <>
            {accountList.slice(0, 3).map((account, index) => (
              <AccountList
                key={index}
                date={account.date}
                description={account.description}
                amount={account.amount}
                balance={account.balance}
                transactionType={itemDescription.transactionType}
                category={itemDescription.category}
                note={itemDescription.note}
              />
            ))}
          </>
        )}
      </div>
        
      </>
    )
}

export default Account