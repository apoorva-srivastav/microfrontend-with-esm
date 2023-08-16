
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0)

    return(
        <><button onClick={() => setCount(count + 1)}>Click here</button><p>{count}</p></>
    )
}