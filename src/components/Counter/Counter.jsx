import { useState } from "react"
export function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>

            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>

        </div>
    )

}
