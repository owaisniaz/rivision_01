import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const enteredName = useRef();
  const enteredAge = useRef();
  const [error, setError] = useState();

  const submitHandler = (e) => {
    let enteredUserName = enteredName.current.value;
    let enteredUserAge = enteredAge.current.value;
    e.preventDefault();
    if (
      enteredUserAge.trim().length === 0 ||
      enteredUserName.trim().length === 0
    ) {
      setError({
        title: "Invalid",
        message: "Please Enter a valid input (non Empty values) ",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Invalid",
        message: "age should be greater than 0 (age > 0)",
      });
      return;
    }

    const user = {
      id: new Date().getTime(),
      name: enteredUserName,
      age: enteredUserAge,
    };
    props.onAddUser(user);
    enteredUserAge = "";
    enteredUserName = "";
  };

  const errorConfirmHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorConfirmHandler}
        />
      )}
      <Card className={classes.input}>
        <form action="#" onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={enteredName} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={enteredAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
