import React, {useState} from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(["Result"]);
  
  return (
    <div>
      <div>{result}</div>
      <div className='ui'>
        <div>
          <div className='grid-container'>
            <div class="grid-item" onClick={() => setResult()}>C</div>
            <div class="grid-item" onClick={() => setResult()}>+/-</div>
            <div class="grid-item" onClick={() => setResult("%")}>%</div>
            <div class="grid-item" onClick={() => setResult(7)}>7</div>
            <div class="grid-item" onClick={() => setResult(8)}>8</div>
            <div class="grid-item" onClick={() => setResult(9)}>9</div>
            <div class="grid-item" onClick={() => setResult(4)}>4</div>
            <div class="grid-item" onClick={() => setResult(5)}>5</div>
            <div class="grid-item" onClick={() => setResult(6)}>6</div>
            <div class="grid-item" onClick={() => setResult(1)}>1</div>
            <div class="grid-item" onClick={() => setResult(2)}>2</div>
            <div class="grid-item" onClick={() => setResult(3)}>3</div>
          </div>
          <div className='bottompanel'>
            <div className='bottom-items' onClick={() => setResult(0)}>0</div>
            <div className='bottom-items' onClick={() => setResult(".")}>.</div>
          </div>
        </div>
        <div className='sidepanel'>
          <div className='side-items' onClick={() => setResult("/")}>/</div>
          <div className='side-items' onClick={() => setResult("x")}>x</div>
          <div className='side-items' onClick={() => setResult("-")}>-</div>
          <div className='side-items' onClick={() => setResult("+")}>+</div>
          <div className='side-items' onClick={() => setResult()}>=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
