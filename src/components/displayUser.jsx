import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/slice";
import { TiDelete } from "react-icons/ti"
export default function DisplayUsers() {
  const data = useSelector((state) => {
    return state.users;
  });

  const dispatch = useDispatch()

  const deleteUser = (id) => {
    dispatch(
      removeUser(id)
    )

  }

  return (
    <>
      <h1>Hello</h1>
      {data.map((user, id) => {
        return <li style={{ borderBottom: "2px solid red", width: "fit-content", listStyle: "none", margin: "5px 0px" }} key={id}>{user}  &nbsp; &nbsp; <TiDelete onClick={() => { deleteUser(id) }} color="red" size={25} style={{ marginBottom: -6, marginLeft: 10 }} /> </li>;
      })}
    </>
  );
}

{/* <button onClick={() => {}}>Delete User </button> */ }
