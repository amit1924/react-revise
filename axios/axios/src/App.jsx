import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const handleFn = async () => {
    // Ist Method
    // const config = {
    //   method: "GET",
    //   url: "data.txt",
    // };
    // try {
    //   const response = await axios(config);
    //   console.log("Data:", response);
    //   setData(response.data);
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
    //  2nd Method
    // const res = await axios.get("data.txt");
    // console.log(res.config.url); //data.txt
    // setData(res.data);
    ////////////////////////////////
    // Fetch Json Data

    // Fetch Json data
    //   const config = {
    //     method: "GET",
    //     url: "data.json",
    //   };
    //   try {
    //     const response = await axios(config);
    //     let newData = response.data;
    //     setData(newData);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    // Fetch Remote API

    // try {
    //   const response = await axios.get("https://dummyjson.com/products/1");
    //   const url = response.config.url; // Get the complete URL with the appended id
    //   console.log("Request URL:", url); // Log the complete URL with the appended id
    //   console.log("Response Data:", response.data); // Log the response data
    //   setData([response.data]);
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
    try {
      const res = await axios.get("https://dummyjson.com/posts/");
      console.log(res.data.posts);
      setData(res.data.posts);
    } catch (error) {
      console.log("Error fetching remote API", error);
    }
  };

  return (
    <div className="">
      <h1 className="">Axios</h1>
      <input type="text" id="input" />
      <button onClick={handleFn}>Get Data</button>
      {data.map((item, index) => (
        <div key={index}>
          <h1>
            {item.id}:{`Title:${item.title}`}
          </h1>
          <h2>{item.body}</h2>
        </div>
      ))}
    </div>
  );
};

export default App;
