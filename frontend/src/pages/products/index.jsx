import { Outlet } from "react-router-dom";
import { useFetch } from "./../../hooks/use-fetch";
import { ProductItem } from "./../../components/product-item/index";
import { CONTAINER } from "./../../components/global";

export const Products = () => {
  const { REACT_APP_API_URL } = process.env;
  const url = `${REACT_APP_API_URL}/products`;
  const [response, error, loading] = useFetch(url);
  console.log(response.data);

  if (error) return <div>something wrong happened</div>;

  if (!loading)
    return (
      <>
        products page
        <CONTAINER>
          {response.data.map((product) => (
            <ProductItem key={product.product_id} {...product} />
          ))}
        </CONTAINER>
        <Outlet />
      </>
    );
};
