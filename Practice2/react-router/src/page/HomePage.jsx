import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    navigate(`/product/${selectedCategory}`);
  };

  return (
    <div>
      <h1 className="">Home Page</h1>
      <select onChange={handleCategoryChange}>
        <option value="">Select</option>
        <option value="computer">Computer</option>
        <option value="smartphone">Smartphone</option>
        <option value="camera">Camera</option>
        <option value="gadgets">Gadgets</option>
      </select>
    </div>
  );
};

export default HomePage;
