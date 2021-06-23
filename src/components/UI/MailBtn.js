import classes from "./MailBtn.module.css";

const MailBtn = (props) => {
  return (
    <a href={props.href} className={classes.mail}>
      {props.children}
    </a>
  );
};

export default MailBtn;
