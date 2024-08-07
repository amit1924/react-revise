import { useContext, useState } from "react";
import { MyContext } from "./MyContext";

const ConsumeContext = () => {
  console.log("Consume context");
  const { text, setText } = useContext(MyContext);
  const [showValue, setShowValue] = useState("");

  console.log(text);
  const changeText = (e) => {
    e.preventDefault();
    setShowValue(text);
    setText("");
  };

  return (
    <div>
      <h1 className="">Consume Context</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Change value"
      />
      <button onClick={changeText}>Set</button>
      <p className="">{showValue}</p>
    </div>
  );
};

export default ConsumeContext;
