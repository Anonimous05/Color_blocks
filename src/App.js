import React, {useState} from 'react';
import './App.css';

function App() {

  const [state,setState] = useState({
    num: 1,
  });

  const newBlockHandler = (e) => {
    const block = document.createElement('div');
    block.className = e.target.className;
    const dom = document.getElementById('blocks2');
    dom.prepend(block);
    setState({...state, num: state.num + 1});
    if(state.num > 5){
      dom.lastChild.remove()
    }
  };

  return (
    <div className="App">
      <div className="blocks">
        <div className="red" onClick={newBlockHandler}></div>
        <div className="green" onClick={newBlockHandler}></div>
        <div className="blue" onClick={newBlockHandler}></div>
        <div className="yellow" onClick={newBlockHandler}></div>
        <div className="black" onClick={newBlockHandler}></div>
        <div className="grey" onClick={newBlockHandler}></div>
      </div>
      <div id="blocks2">

      </div>
    </div>
  );
}

export default App;
