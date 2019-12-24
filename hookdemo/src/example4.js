import React, { useState, createContext, useContext } from 'react'

const countContext = createContext()

function Counter() {
    let count = useContext(countContext)
    return (
        <h2>{count}</h2>
    )
}

function Example4() {
    const [count, setCount] = useState(0)
  
    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click Me</button>
            <countContext.Provider value = {count} >
                <Counter />
            </countContext.Provider>
        </div>
    )
}

export default Example4;