

import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

function Counter() {

    const [number, setNumber] = useState(0);
    const [flag, setFlag] = useState(true);

    useEffect(()=>{
        
        setInterval(() => {
            number = number + 1 
            setNumber(number);
        }, 1000);
        
    },[]);

    render(
        <>
            <label>Counter </label>{number}

            <button onClick={setFlag(false)}>Stop</button>


        </>

    )


}

export default Counter;