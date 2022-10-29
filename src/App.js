import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

const App = (props) => {
  const [users, setUser] = useState([]);
  const addUserHandler = (user) => {
    setUser((prevState) => [user, ...prevState]);
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </>
  );
};
export default App;
