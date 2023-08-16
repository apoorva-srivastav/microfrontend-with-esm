import React, {useState} from "https://esm.sh/react@18.2.0?dev"
import "./App.css";
import {BasicButton} from 'https://esm.sh/gh/apoorva-srivastav/microfrontend-with-esm@a8605ab44d/apps_copy/custom-library/output1/output.js'

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
