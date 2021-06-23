import SkillsList from "../UI/SkillsList";
import classes from "./Skills.module.css"

const Skills = () => {
  const workingKnowledge = [
    "Semantic HTML5",
    "CSS3",
    "SASS",
    "JS: Local storage",
    "JS: DOM manipulations",
    "Markdown",
    "Figma",
    "Forms",
    "Oracle SQL",
    "PL/SQL",
    "React JS",
  ];

  const knowSthAbout = [
    "JavaScript ES6 + features",
    "CSS animations",
    "Working with API",
    "NPM Scripts",
    "PWA",
    "Git",
    "Accessibility",
  ];

  const wantToLearn = ["Any CSS framework", "GraphQL", "JQuery", "Node"];

  return (
    <section className={classes.skills} id="skills">
      <h2 className={classes.skills__header}>My skills</h2>
      <div className={classes["skills__container-grid"]}>
      <SkillsList 
      list={workingKnowledge} 
      itemClassName={classes["skills-list__item--green"]} 
      emoji="💪" 
      header="Working knowledge"/>
      <SkillsList 
      list={knowSthAbout} 
      itemClassName={classes["skills-list__item--blue"]}
      emoji="🤔" 
      header="Know something about"/>
      <SkillsList 
      list={wantToLearn} 
      itemClassName={classes["skills-list__item--dot"]} 
      emoji="🎓" 
      header="Want to learn"/>
      </div>
    </section>
  );
};

export default Skills;