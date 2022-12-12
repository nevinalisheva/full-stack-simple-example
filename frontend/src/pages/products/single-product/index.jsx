import { Outlet, useParams } from "react-router-dom";
import { ProductItem } from "../../../components/product-item";
import { useFetch } from "./../../../hooks/use-fetch";

export const SingleProduct = () => {
  const { id } = useParams();
  const { REACT_APP_API_URL } = process.env;
  const url = `${REACT_APP_API_URL}/${id}`;
  const [response, error, loading] = useFetch(url);

  if (error) return <div>something wrong happened</div>;

  if (!loading)
    return (
      <>
        single product page
        <ProductItem {...response.data[0]} showMoreDetails />
        <Outlet />
      </>
    );
};
