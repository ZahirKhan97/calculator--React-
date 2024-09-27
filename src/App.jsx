import styles from './App.module.css';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

function App() {
  const [calVal, setCalVal] = useState('');
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal('');
    }
    else if (buttonText === '=') {
      const result = eval(calVal);
      setCalVal(result);
    }
    else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  }
  return (
    <div className={`d-flex justify-content-center p-5 ${styles.mainContainer}`}>
      <div className={`${styles.calculator} p-2`} >
        <Display displayValue={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div >
    </div>
  )
}

export default App
