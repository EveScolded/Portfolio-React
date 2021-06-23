import classes from "./GhCard.module.css";

const GhCard = (props) => {

return (
        <article className={classes.project}>
            <div className={classes.project__bar}>
              <span className={classes.project__circles} alt=""></span>
            </div>
            <div className={classes.project__content}>
              <div className={classes["project__github-logo"]}  alt="logo GitHub"></div>
              <p className={classes.project__grid}>
                <span className={classes.project__label}>project:</span>
                <span className={classes.project__name}>{props.name}</span>
              </p>
              <p className={classes.project__grid}>
                <span className={classes.project__label}>description:</span>
                <span className={classes.project__description}>{props.description}</span>
              </p>
              <p className={classes.project__grid}>
                <span className={classes.project__label}>demo:</span>
                <span>&lt;<a href={props.homepage} title={props.name} className={classes.project__link} target="_blank" rel="noopener norefferer">see here</a>&gt;</span>
              </p>
              <p className={classes.project__grid}>
                <span className={classes.project__label}>github:</span>
                <span>&lt;<a href={props.html_url} title={props.name} className={classes.project__link} target="_blank" rel="noopener norefferer">source code</a>&gt;</span>
              </p>

            </div>
          </article>
    )
}

export default GhCard;