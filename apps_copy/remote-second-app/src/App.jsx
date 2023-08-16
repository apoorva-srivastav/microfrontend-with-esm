import React, {useState} from "https://esm.sh/react@18.2.0?dev"
import "./App.css";
import {BasicButton} from 'http://localhost:8700/output.mjs'

const App = () => {
  const [count, setCount] = useState(0)
  return (
  <section className='app-b'>
    <h3>This is a remote app</h3>
    <BasicButton text={count} onClick={() => setCount(count+1)}/>
  </section>
)
  };

export default App;
