import React from "react";
import { fake_user_data } from "../api";
import { useDispatch,useSelector } from "react-redux";
import { addUser,deleteAllUsers } from "../store/slices/slice";
import DisplayUsers from "./displayUser"
const user_details = () => {

  const dispatch = useDispatch();
  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };
  const clearAllListeners = () => {
    dispatch(deleteAllUsers())
  }

  return (
    <>
      <h1>Users Section</h1>

      <button
        onClick={() => { addNewUser(fake_user_data()); }}>Add User</button>
      <br />
      <br />
      <button onClick={() => {clearAllListeners()}}>Delete All </button>


      
{/*  body section */}
<DisplayUsers/>

    </>
  );
};
export default user_details;
