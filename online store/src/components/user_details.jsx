import React from 'react'
import { fake_user_data } from '../api'

const user_details = () => {
  
    const addNewUser = (payload)=>{
        console.log(payload);

    }
    return (
        <>
        <h1>Users Section</h1>
        <button onClick={()=>{addNewUser(fake_user_data())}}>Add User</button>
        </>
  )
}

export default user_details