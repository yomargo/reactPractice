import React, {useState, useContext} from 'react';
import { ThemeContext } from './App';

export default function CounterHooks ({initialCount}) {
    const [counter, setCounter] = useState(initialCount)
    const style = useContext(ThemeContext)

    return(
        <div>
            <button style={style} onClick = {() => setCounter(prevState => prevState +1)} >+</button>
            <span>{counter}</span>
            <button style={style} onClick = {() => setCounter(prevState => prevState -1)}>-</button>
        </div>
    )
}