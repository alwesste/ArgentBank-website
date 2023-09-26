import { useState } from "react"
import { useSelector } from "react-redux"
import {selectFirstName, selectLastName, selectToken, selectUserName} from '../../selector'
import { updateUserName } from "../../authAPI"
import { useDispatch } from "react-redux"

import "./EditUser.scss"
import { setUserName } from "../../reduxfeatures/userSlice"


function EditUser () {

    const firstname = useSelector(selectFirstName)
    const lastname = useSelector(selectLastName)
    const username = useSelector(selectUserName)
    const token = useSelector(selectToken)
    const [usernameValue, setusernameValue] = useState("");
    const dispatch = useDispatch()

    const handleCancel = () => {
        setusernameValue('')
    }
    

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        try {
            const response = await updateUserName(token, usernameValue);
            
            if (response.status === 200) {
                dispatch(setUserName({  userName: usernameValue }));
            } else {
                console.error('Failed to update username.');
            }
        } catch (error) {
            console.error('Error updating username:', error);
        }
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}> 
                <h1 className="title">Edit user info</h1>
                <label htmlFor="username">User name : 
                    <input type="text" 
                    name="username" 
                    id="username" 
                    size="10" 
                    value={usernameValue || ""}
                    onChange={(e) => setusernameValue(e.target.value)}
                    placeholder={username}
                    minLength={5}
                    autoComplete="username"
                    />
                </label>

                <label htmlFor="firstname">First name :
                    <input type="text" 
                    name="firstname" 
                    id="firstname" 
                    size="10"
                    defaultValue={firstname}
                    className="disable"

                    />
                </label>

                <label htmlFor="lastname">Last name :
                    <input type="text" 
                    name="lastname" 
                    id="lastname" 
                    size="10"
                    defaultValue={lastname}
                    className="disable"
                    />
                </label>
                <div className="form-button">
                    <button className="saving" type="submit" >Save</button>
                    <button className="cancel" type="button" onClick={handleCancel}>Cancel</button>
                </div>
                
            </form>
        </>
    )
}

export default EditUser