import HeroPhoto from "./HeroPhoto";
import HeroText from "./HeroText";
import MailBtn from "../UI/MailBtn";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero} id="hero">
      <HeroPhoto />
      <HeroText />
      <MailBtn href="mailto:ewelina.rugala93@gmail.com">Mail me!</MailBtn>
    </div>
  );
};

export default Hero;
