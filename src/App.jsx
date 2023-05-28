import React from "react";
import "./App.scss";
import Form from "./pages/Form/Form";
import Navbar from "./components/Navbar/Navbar";


let App = () => {
  return (
    <div className="app">
      <Navbar />
      <Form />
    </div>
  );
};

export default App;
