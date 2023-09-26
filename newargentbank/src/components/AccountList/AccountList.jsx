import { useState } from "react"
import "./AccountList.scss"

const AccountList = ({date, description, amount, balance, transactionType, category, note}) => {

const [ drop, setdrop] = useState(false)  
const [isEditingCategory, setIsEditingCategory] = useState(false);
const [isEditingNote, setIsEditingNote] = useState(false);
const [editedCategory, setEditedCategory] = useState(category);
const [editedNote, setEditedNote] = useState(note);

function handledrop() {
    setdrop(!drop)
}


    return (
        <>
            <div className="container"> 
                <div className="list">
                    <p className="list-date">{date}</p>
                    <p className="list-description">{description}</p>
                    <p className="list-amount">${amount}</p>
                    <p className="list-balance">${balance}</p>
                    <i className={`fa-solid fa-chevron-up ${drop && 'rotate'}`} onClick={handledrop} ></i>  
                </div>
                
                <div className={`list-detail ${drop && 'appear'}`}>
                    <div className="list-detail-transaction">
                        <p>Transaction type </p>
                        <p className="space">{transactionType}</p>
                    </div> 
                    <div className="list-detail-transaction">
                        <p>Category</p>

                        {isEditingCategory ? (
                        <>
                            <input
                            type="text"
                            value={editedCategory}
                            onChange={(e) => setEditedCategory(e.target.value)}
                            />
                        </>
                        ) : (
                        <p className="space">
                            {category}
                            <i className="fa-solid fa-pen" onClick={() => setIsEditingCategory(true) }></i>
                        </p>
                        )}
                    </div>
                    <div className="list-detail-transaction">
                        <p>Note</p>

                        {isEditingNote ? (
                        <>
                            <input
                            type="text"
                            value={editedNote}
                            onChange={(e) => setEditedNote(e.target.value)}
                            />
                        </>
                        ) : (
                        <p className="space">
                            {note} <i className="fa-solid fa-pen" onClick={() => setIsEditingNote(true)}></i>
                        </p>
                        )}
                    </div>                
                </div>         
            </div>  
        
        </>
    )
}

export default AccountList