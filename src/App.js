import './App.css';
import './css/Button.css'
import './css/Counter.css'
import Button1 from './components/Button';
import Counter from './components/Counter';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import { useState } from 'react'

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
    console.log("Click");
  }

  const resetCounter = () =>{
    setNumClicks(0);
    console.log('Reset');
  }

  return (
    <div className='App'>
      <h1 className='title'>Calculator by Bruno vía React</h1>
      <div className='principal-container'>
        <Counter numClicks={numClicks} />

        <Button1 
        text='Click Here'
        itsClickButton={true}
        handleClick={handleClick}/>
        <Button1 
        text='Reset'
        itsClickButton={false}
        handleClick={resetCounter}/>
      </div>
    </div>
  );
}

export default App;