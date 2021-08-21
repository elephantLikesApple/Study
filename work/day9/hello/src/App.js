import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {

  let [msg, setMsg] = useState("hello react world")
  let [counter, setCounter] = useState(0)

  function changeMsg(_newMsg) {
    // msg = 'hi'
    setMsg(_newMsg)
    console.log(`change message : ${_newMsg}`)
  }

  return (
    <div className="App">
      <h1>{msg}</h1>
      <button onClick={()=> changeMsg('hi')}>hi</button>
      <button onClick={()=> changeMsg('bye')}>bye</button>
      <div>
        <h1>The counter</h1>
        <h3>{counter}</h3>
        <button onClick={() => { setCounter(counter-1) }}>dec</button>
        <button onClick={() => { setCounter(0) }}>reset</button>
        <button onClick={() => { setCounter(counter+1) }}>inc</button>
      </div>
    </div>
  );
}

export default App;
