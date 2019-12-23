import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index() {
    useEffect(() => {
        console.log("useEffect Index")
        return () => {
            console.log("离开Index")
        }
    }, [])
    return  <h2>Index</h2>
}

function List() {
    useEffect(() => {
        console.log("useEffect List")
        return () => {
            console.log("离开List")
        }
    }, [])
    return <h2>List</h2>
}

function Example() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log(`useEffect ${count}`)
        return () => {
            console.log("=============")
        }
    }, [count])
    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click Me</button>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表页</Link></li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List}/>
            </Router>
        </div>
    )
}

export default Example;