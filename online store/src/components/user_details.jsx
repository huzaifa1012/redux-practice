import React from "react";
import { fake_user_data } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/slice";
import DisplayUsers from "./displayUser"
const user_details = () => {

  const dispatch = useDispatch();

  const addNewUser = (payload) => {
  
    dispatch(addUser(payload));
  
  };
  return (
    <>
      <h1>Users Section</h1>

      <button
        onClick={() => {
          addNewUser(fake_user_data());
        }}
      >
        Add User{" "}
      </button>
      <br />
      <button onClick={() => {}}>Delete User </button>
      <br />
      <button onClick={() => {}}>Delete All </button>



{/*  body section */}
<DisplayUsers/>

    </>
  );
};
export default user_details;
