import React from 'react'
import { useState } from 'react'
import "./style.css"

export function Box() {

   

    const [input, setInput] = useState({
        amount: "",
        currency: ""
    });

    const handleInput = (e) => {
       
        const name = e.target.name;
        const value = e.target.value;

        setInput({ ...input, [name]: value })
        

    }
     const Convert = (e) =>{
        e.preventDefault();
         var res = input.amount * 80;
         alert("Converting to " + input.currency+" Amount is : " + res  )
    }
    return (
        <form onSubmit={Convert} >
            <div>
                <h1 id="hello">Currency Converter!!!</h1>
                </div>
        <div>
                <label htmlFor="Amount">Amount</label>
                <input type="number" id="amount" name="amount" value={input.amount} onChange={handleInput}/>
            </div>
        
        <div>

                <label htmlFor="Currency">Currency:</label>
                <input type="text" id="currency" name="currency" value={input.currency} onChange={handleInput} />

            </div>

            <div>
                <button type="Submit">Submit</button>
            </div>
            </form >
            )

}