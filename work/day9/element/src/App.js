import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  let [text, setText] = useState('hello')
  let [text2, setText2] = useState('')

  function onChangeText(evt) {
    console.log(evt);
    setText(evt.target.value)
  }

  return (
    <div className="App">
      <h1>{text}</h1>
      <input onChange={onChangeText} value={text} />
      <button onClick={()=>{ setText2(text) }}>ok</button>
      <h1>{text2}</h1>
    </div>
  );
}

export default App;
