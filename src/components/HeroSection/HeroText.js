import classes from "./HeroText.module.css";

const HeroText = () => {
  return (
    <div className={classes.hero__description}>
      <h1 className={classes.hero__header}>
        My name is Ewelina <br /> and I'm an aspiring{" "}
        <span className={classes["hero__header-color"]}>
          {" "}
          Frontend developer
        </span>
      </h1>
      <p className={classes.hero__paragraph}>
        {"You might be interested in checking the list of "}
        <a className={classes.hero__link} href="#skills">
          my skills
        </a>
        . Don’t forget to have a glimpse at{" "}
        <a className={classes.hero__link} href="#projects">
          my projects
        </a>
        . Currently I’m looking for a new challenges so if you have one {"- "}
        <a className={classes.hero__link} href="#contact">
          contact me{" "}
        </a>
        😊
      </p>
    </div>
  );
};

export default HeroText;
