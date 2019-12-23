import React, { useState, useEffect } from 'react'

function Example() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log(`useEffect ${count}`)
    })
    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click Me</button>
        </div>
    )
}

export default Example;