// src/App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux Toolkit Counters</h1>
      <div className="body">
        {/* <span className="counts"> */}
        <h2 className="counts">Added stock: {counter}</h2>
        {/* </span> */}
        <div className="buttons-div">
          <button onClick={() => dispatch(increment())} className="button-1">
            Add in
          </button>
          <button onClick={() => dispatch(decrement())} className="button-2">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
