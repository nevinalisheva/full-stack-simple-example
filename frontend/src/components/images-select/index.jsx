import { OPTION, SELECT } from "./styled";

export const ImagesSelect = ({ setSelectedOption }) => {
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <SELECT onChange={handleChange}>
      <OPTION value="all">all</OPTION>
      <OPTION value="products">products</OPTION>
      <OPTION value="categories">categories</OPTION>
    </SELECT>
  );
};
