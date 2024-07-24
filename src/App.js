import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count,setCount]=useState(0);

  function decrementHandler(){
    setCount(count-1);
  }

  function incrementHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className='h-[100vh] w-[100vw] bg-page flex flex-col justify-center items-center gap-6'>

      <h2 className='text-lg font-semibold text-heading'>Increment & Decrement</h2>
      
      <div className='h-12 w-[auto] bg-white flex justify-center items-center gap-6 rounded-sm'>
        <button className='flex justify-center items-center p-4 ml-3' onClick={decrementHandler}>
          <i class="fa-solid fa-minus text-gray-600"></i>
        </button>
        
        <div className='h-7 w-[1.5px] bg-gray-300 mr-6'></div>
        
        <div className='text-3xl font-bold'> {count} </div>
        
        <div className='h-7 w-[1.5px] bg-gray-300 ml-6'></div>
        
        <button className='flex justify-center items-center p-4 mr-3' onClick={incrementHandler}>
          <i class="fa-solid fa-plus text-gray-600"></i>
        </button>
      </div>
      
      <button onClick={resetHandler} className='w-24 h-8 bg-resetBtn rounded-sm text-white font-semibold'>RESET</button>
    </div>
  );
}

export default App;
