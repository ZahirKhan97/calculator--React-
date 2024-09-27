import styles from './App.module.css'

function App() {

  return (
    <div className={styles.calculator}>
      <input id='display' type="text" />
      <div id='button-container'>
        <button>C</button>
      </div>
    </div>
  )
}

export default App
