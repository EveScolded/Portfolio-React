import MailBtn from "../UI/MailBtn";
import ContactBtn from "../UI/ContactBtn";
import classes from "./Contact.module.css";
import logoLI from "../../assets/img/linkedin_blue.svg";
import logoGH from "../../assets/img/gh_blue.svg";

const Contact = () => {
  return (
    <section className={classes.contact} id="contact">
      <h2 className={classes.contact__header}>Contact me</h2>
      <p className={classes.contact__description}>
        I'm open for new opportunities. If you have one for me we should talk!
      </p>
      <div className={classes.contact__container}>
        <div className={classes.contact__links}>
          <ContactBtn
            href={"https://www.linkedin.com/in/ewelina-ruga%C5%82a-298a49102/"}
            src={logoLI}
            alt={"logo Linkedin"}
          />
          <ContactBtn
            href={"https://github.com/EveScolded"}
            src={logoGH}
            alt={"logo GitHub"}
          />
        </div>

        <MailBtn
          className={classes.contact__mail}
          href="mailto:ewelina.rugala93@gmail.com"
        >
          ewelina.rugala93@gmail.com
        </MailBtn>
      </div>
    </section>
  );
};

export default Contact;
