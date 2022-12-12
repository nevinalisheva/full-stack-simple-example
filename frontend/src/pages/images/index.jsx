import { useFetch } from "./../../hooks/use-fetch";
import { ImageItem } from "./../../components/image-item";
import { ImagesSelect } from "../../components/images-select";
import { useState } from "react";
import { CONTAINER } from "./../../components/global";

export const Images = () => {
  const { REACT_APP_API_URL } = process.env;
  const [selectedOption, setSelectedOption] = useState("all");
  const url = `${REACT_APP_API_URL}/images${
    selectedOption !== "all" ? `?type=${selectedOption}` : ""
  }`;
  const [response, error, loading] = useFetch(url);

  if (error) return <div>something wrong happened</div>;

  if (!loading)
    return (
      <>
        images page
        <CONTAINER>
          <ImagesSelect setSelectedOption={setSelectedOption} />
          {response.data.map((image) => (
            <ImageItem key={image.image_id} {...image} />
          ))}
        </CONTAINER>
      </>
    );
};
