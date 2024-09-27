import styles from './App.module.css';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div className={`d-flex justify-content-center p-5 ${styles.mainContainer}`}>
      <div className={`${styles.calculator} p-2`} >
        <Display></Display>
        <ButtonsContainer></ButtonsContainer>
      </div >
    </div>
  )
}

export default App
