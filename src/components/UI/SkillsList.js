import classes from "./SkillsList.module.css";

const SkillsList = (props) => {
  const listOfSkills = props.list.map((item) => (
    <li className={`${classes["skills-list__item"]} ${props.itemClassName}`}>
      {item}
    </li>
  ));
  return (
    <article>
      <span className={classes["skills-article__emoji"]}>{props.emoji}</span>
      <h3 className={classes["skills-article__header"]}>{props.header}</h3>
      <ul className={classes["skills-list"]}>{listOfSkills}</ul>
    </article>
  );
};

export default SkillsList;
