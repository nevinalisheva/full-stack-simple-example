import classes from "./classes.module.css";

export const ImageItem = ({ title, category, url }) => {
  return (
    <div className={classes.card}>
      <h4>{title}</h4>
      <img src={url} alt={title} />
      <h4> {category ? "category" : "product"} </h4>
    </div>
  );
};
