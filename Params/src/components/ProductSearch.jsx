/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import { Link, useSearchParams } from "react-router-dom";
import "./ProductSearch.css";

const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.in/api/products");
    const data = await res.json();
    setProducts(data.products);
  };

  const fetchCategories = async () => {
    const res = await fetch("https://fakestoreapi.in/api/products/category");
    const data = await res.json();
    setCategories(data.categories);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (category) {
        newParams.set("category", category);
      } else {
        newParams.delete("category");
      }
      return newParams;
    });
  };

  const handleSearchChange = (event) => {
    const search = event.target.value;
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (search) {
        newParams.set("search", search);
      } else {
        newParams.delete("search");
      }
      return newParams;
    });
  };

  const handleSortChange = (event) => {
    const sort = event.target.value;
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (sort) {
        newParams.set("sort", sort);
      } else {
        newParams.delete("sort");
      }
      return newParams;
    });
  };

  const getSortedProducts = (products) => {
    const sortParam = searchParams.get("sort");
    if (!sortParam) return products;

    const [key, order] = sortParam.split("_");
    const sortedProducts = [...products].sort((a, b) => {
      if (a[key] < b[key]) return order === "asc" ? -1 : 1;
      if (a[key] > b[key]) return order === "asc" ? 1 : -1;
      return 0; // If values are equal, return 0 (no change in order)
    });

    return sortedProducts;
  };

  const filteredProducts = getSortedProducts(
    products.filter((product) => {
      const categoryFilter = searchParams.get("category")
        ? product.category === searchParams.get("category")
        : true;
      const searchFilter = searchParams.get("search")
        ? product.title
            .toLowerCase()
            .includes(searchParams.get("search").toLowerCase())
        : true;
      return categoryFilter && searchFilter;
    })
  );

  return (
    <div className="container">
      <h2 className="heading">Product List</h2>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearchChange}
        className="searchInput"
      />
      <select onChange={handleCategoryChange} className="select">
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select onChange={handleSortChange} className="select">
        <option value="">Sort By</option>
        <option value="title_asc">Title Ascending</option>
        <option value="title_desc">Title Descending</option>
        <option value="price_asc">Price Ascending</option>
        <option value="price_desc">Price Descending</option>
      </select>
      <div className="productGrid">
        {filteredProducts.map((product) => (
          <div className="productCard" key={product.id}>
            <Link to={`/productsearchdetails/${product.id}`} className="link">
              <LazyLoad height={200} offset={100}>
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="image"
                  />
                </div>
              </LazyLoad>
              <div className="title">
                <h3>{product.title}</h3>
                <h4 className="">${product.price}</h4>
              </div>
              <div className="button-cart">
                <button className="btn">Add To Cart</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;
