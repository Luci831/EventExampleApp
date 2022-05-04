import React from 'react';


export function Message() {

    function Message1() {
        alert("Welcome")
    }
    function Message2() {
        alert("I Was Pressed")
    }

    return (
        <div>
            <button onClick={Message1}>Welcome</button><br/>
            <button onClick={Message2}>Click On Me</button>
        </div>)
}