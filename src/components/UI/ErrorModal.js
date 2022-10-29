import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  console.log(props.message);
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h1>{props.title}</h1>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onConfirm={props.onConfirm}>oKay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
