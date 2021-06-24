import classes from "./ContactBtn.module.css";

const ContactBtn = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noopener norefferer">
      <img className={classes.contact__icons} src={props.src} alt={props.alt} />
    </a>
  );
};

export default ContactBtn;
