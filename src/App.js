import React, { useState } from 'react';
import './App.css';



function App() { 
 const [result, setresult] = useState("")

  function handleclick(e){
   const value1 = e.target.value
  console.log(value1)
  setresult(result.concat(value1))
  }
  const calculate=()=>{
    setresult(eval(result))

  }
function deleteLast(){
  setresult(result.slice(0,-1))
}
  function clearResult(){
    setresult("")
  }
return (
    <div className="App">
<div className='main'>
  <div className='display'><p className='res'>{result || 0}</p></div>
  <div className='buttons'>
    <button className='button' value={1}  onClick={handleclick}>1</button>
    <button className='button' value={2} onClick={handleclick}>2</button>
    <button className='button' value={3} onClick={handleclick}>3</button>
     <button className='button' value={4} onClick={handleclick}>4</button>
    <button className='button' value={5} onClick={handleclick}>5</button>
    <button className='button' value={6} onClick={handleclick}>6</button>
    <button className='button' value={7} onClick={handleclick}>7</button>
    <button className='button' value={8} onClick={handleclick}>8</button>
    <button className='button' value={9} onClick={handleclick}>9</button>
    <button className='button' value={"+"} onClick={handleclick}>+</button>
    <button className='button' value={0} onClick={handleclick}>0</button>
  
    <button className='button' value={"-"} onClick={handleclick}>-</button>
   
    <button className='button' value={"*"} onClick={handleclick}>X</button>
    <button className='button' value={"."} onClick={handleclick}>.</button>
   <button className='button' value={"/"} onClick={handleclick}>/</button>
   
    <button className='button' value={"AC"} onClick={clearResult}>AC</button>
   
    <button className='button' value={"="} onClick={calculate}>=</button>
    <button className='button' value={"c"} onClick={deleteLast}>C</button>                    

  </div>
</div>
    </div>
  );
}
export default App;
