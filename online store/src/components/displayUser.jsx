import { useSelector } from "react-redux";

export default function DisplayUsers() {
  const data = useSelector((state) => {
    return state.users;
  });

  return (
    <>
      <h1>Hello</h1>
      {data.map((user, id) => {
        return <li key={id}>{user}</li>;
      })}
    </>
  );
}
