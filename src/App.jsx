import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddCartButton from "./components/AddCartButton";

function App() {
  return (
    <div className="container">
      <div className="container-fluid">
        <div>
          <AddCartButton btnName={"Add to Cart"} />
        </div>
        <div>
          <AddCartButton btnName={"Add to Cart"} />
        </div>
        <div>
          <AddCartButton btnName={"Add to Cart"} />
        </div>
        <div>
          <AddCartButton btnName={"Add to Cart"} />
        </div>
        <div>
          <AddCartButton btnName={"Add to Cart"} />
        </div>
        <div>
          <AddCartButton btnName={"Add to Cart"} />
        </div>
        <div>
          <AddCartButton btnName={"Add to Cart"} />
        </div>
        <div>
          <AddCartButton btnName={"Add to Cart"} />
        </div>
        <div>
          <AddCartButton btnName={"Add to Cart"} />
        </div>
        <div>
          <AddCartButton btnName={"Add to Cart"} />
        </div>
      </div>
    </div>
  );
}

export default App;
