import { useParams } from "react-router-dom";

const Products = () => {
  const params = useParams();
  console.log(params);
  console.log(params.category);
  return (
    <div className="">
      <h1 className="">Products:{params.category}</h1>
    </div>
  );
};

export default Products;
