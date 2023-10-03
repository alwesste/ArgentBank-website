import { useState } from "react"
import "./AccountList.scss"

const AccountList = ({date, description, amount, balance, transactionType, category, note}) => {

const [ drop, setdrop] = useState(false)  
const [isEditingCategory, setIsEditingCategory] = useState(false);
const [isEditingNote, setIsEditingNote] = useState(false);
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
                        <p className="list-detail-specification">{transactionType}</p>
                    </div> 
                    <div className="list-detail-transaction">
                        <p>Category</p>

                        {isEditingCategory ? (
                        <>
                            <select name="category" className="select-element" > 
                                <option value=""></option>
                                <option value="Food">Food</option>
                                <option value="Clothes">Clothes</option>
                                <option value="Electronic">Electronic</option>
                                <option value="Rent">Rent</option>

                            </select>
                        </>
                        ) : (
                        <p className="list-detail-specification">
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
                            className="input-element"
                            type="text"
                            value={editedNote}
                            onChange={(e) => setEditedNote(e.target.value)}
                            minLength={10}
                            />
                        </>
                        ) : (
                        <p className="list-detail-specification">
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