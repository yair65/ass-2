import React, { useState }from 'react';
import './App.css';
// import InputComponent from './InputComponent/InputComponent.js'
import ValidationComponent from './componenets/ValidationComponent/ValidationComponent'
import CharComponent from './componenets/CharComponent/CharComponent'
function App() {

  const [mainText, setMainText] = useState("");

  const charComponentRender = () =>
  {
    const charArray = mainText.split('')
    return(
      <div>
        {charArray.map((elem, index) => {
        return(
          <CharComponent 
          char={elem} 
          key={index*index}
          clicked={() => charComponentClickHandler(index)}
          />
        );
        })}
      </div>
    );
  };

  const charComponentClickHandler = (index) =>
  {
    const mainTextCopy = [...mainText];
    mainTextCopy.splice(index, 1);
    setMainText(mainTextCopy.join(''));
  };

  const inputHandler = (event) => {
    setMainText(event.target.value);
  }

  return (
    <div className="App">
      <input onChange={(event) => inputHandler(event)} value={mainText}/>
      <p>The length of the input is {mainText.length}</p>
      <ValidationComponent textLength={mainText.length}/>
      {charComponentRender()}
    </div>
  );
}

export default App;
