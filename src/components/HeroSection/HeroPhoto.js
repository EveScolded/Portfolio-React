import classes from "./HeroPhoto.module.css";
import heroPhoto from "../../assets/img/hero.jpg";

const HeroPhoto = () => {
  console.log(classes);
  return (
    <div className={classes["hero__image-container"]}>
      <span className={classes.hero__cloud}>
        Hey there!<span className={classes.hero__hand}> 👋</span>
      </span>
      <img
        className={classes.hero__image}
        src={heroPhoto}
        alt="Ewelina's photo"
      />
    </div>
  );
};

export default HeroPhoto;
