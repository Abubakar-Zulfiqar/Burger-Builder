import React, { useState } from 'react'

import '../Components/Hooks.css'



const Hooks = () => {

    const [count, setCount] = useState(0);

    const IncNum = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={IncNum} className='btn'>Click me</button>
        </>
    )
}

export default Hooks;