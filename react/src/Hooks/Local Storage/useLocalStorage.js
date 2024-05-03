import React from "react";

const useLocalStorage = () => {
  const storage = useLocalStorage();

  console.log(storage);
  return <div>Local Storage</div>;
};

export default useLocalStorage;
