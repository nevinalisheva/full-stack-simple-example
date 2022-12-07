import classes from "./classes.module.css";

export const CategoryItem = ({ title, image }) => {
  return (
    <div className={classes.card}>
      <h4>{title}</h4>
      <img src={image} alt={title} />
    </div>
  );
};
