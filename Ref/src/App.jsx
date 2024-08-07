/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ScrollToElement from "./components/ScrollToElement";
import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {/* <ScrollToElement /> */}
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default App;
