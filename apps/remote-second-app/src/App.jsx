import React from "react";
import "./App.css";
import { Counter } from "./CounterComponent";

const App = () => {

  return (
  <section className='app-b'>
    <h3>This is a second remote app</h3>
    <Counter/>
  </section>
)
  };

export default App;
