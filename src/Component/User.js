import React,{useState} from 'react';


// useState use to update value of variable:
const Hello=()=>{
    // setOutput ka use value ko update karta hai::
    const [output,setOutput]=useState("");

    // e.target.value esse jo bhi button ko click katre pe wo value
    // ko return karta hai.
    const cliclHendaler=(e)=>{
        setOutput(output.concat(e.target.value))
    }

    const clearDisplay=()=>{
        // yaha jo bhi value ko target karte hai wo value hota hai empty string me.
        setOutput("")
    }

    const calculate=()=>{
        // eval() function two string ko add karne ka kam karta hai.
        setOutput(eval(output))
    }

    return(
        <>
        <h1 className='heading'>👑Calculator Task👑</h1>
            <div className=' All-btn'> 
        
        <div className='calc'>
            <input type="text" placeholder="0" id="answer" value={output} />
            <input type="button"value="1" className='button' onClick={cliclHendaler}/>
            <input type="button"value="2" className='button' onClick={cliclHendaler}/>
            <input type="button"value="3" className='button' onClick={cliclHendaler}/>
            <input type="button"value="4" className='button' onClick={cliclHendaler}/>
            <input type="button"value="5" className='button' onClick={cliclHendaler}/>
            <input type="button"value="6" className='button' onClick={cliclHendaler}/>
            <input type="button"value="7" className='button' onClick={cliclHendaler}/>
            <input type="button"value="8" className='button' onClick={cliclHendaler}/>
            <input type="button"value="9" className='button' onClick={cliclHendaler}/>
            <input type="button"value="0" className='button' onClick={cliclHendaler}/>
            <input type="button"value="+" className='button' onClick={cliclHendaler}/>
            <input type="button"value="-" className='button' onClick={cliclHendaler}/>
            <input type="button"value="*" className='button' onClick={cliclHendaler}/>
            <input type="button"value="/" className='button' onClick={cliclHendaler}/>
            <input type="button"value="%" className='button' onClick={cliclHendaler}/>
            <input type="button"value="." className='button' onClick={cliclHendaler}/>
            <input type="button"value="clear" className='button-one' onClick={clearDisplay} />
            <input type="button"value="=" className='button-one' onClick={calculate} />
        </div>
        </div>

        </>
    )
}
export default Hello;