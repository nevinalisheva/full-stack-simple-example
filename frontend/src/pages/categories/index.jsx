import { CONTAINER } from "./../../components/global";
import { useFetch } from "./../../hooks/use-fetch";
import { CategoryItem } from "./../../components/category-item/index";

export const Categories = () => {
  const { REACT_APP_API_URL } = process.env;
  const url = `${REACT_APP_API_URL}/categories`;
  const [response, error, loading] = useFetch(url);

  if (error) return <div>something wrong happened</div>;

  if (!loading)
    return (
      <>
        categories page
        <CONTAINER>
          {response.data.map((image) => (
            <CategoryItem key={image.category_id} {...image} />
          ))}
        </CONTAINER>
      </>
    );
};
