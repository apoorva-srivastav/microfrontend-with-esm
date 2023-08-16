import {useState} from "https://esm.sh/react@18.2.0?dev"
import "./App.css";
import {BasicButton} from "./components";

const App = () => {
  const [count, setCount] = useState(0)
  return (
  <section className='app-b'>
    <h3>This is a remote library for custom components like: BasicButton</h3>
    <BasicButton text={count} onClick={() => setCount(count+1)}/>
  </section>
)
  };

export default App;
