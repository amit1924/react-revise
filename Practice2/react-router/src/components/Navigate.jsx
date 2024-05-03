import { Link } from "react-router-dom";

const Navigate = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Link style={{ textDecoration: "none" }} to="/">
        Home Page
      </Link>
      <Link style={{ textDecoration: "none" }} to="/product/computer">
        Computer
      </Link>

      <Link style={{ textDecoration: "none" }} to="/product/smartphone">
        Smartphone
      </Link>

      <Link style={{ textDecoration: "none" }} to="/product/camera">
        Camera
      </Link>
      <Link style={{ textDecoration: "none" }} to="/product/gadgets">
        Gadgets
      </Link>
    </div>
  );
};

export default Navigate;
