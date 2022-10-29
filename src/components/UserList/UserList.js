import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Card className={classes.user}>
      <ul>
        {props.users.map((u) => (
          <li key={u.id} >
            {u.name} (age: {u.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
