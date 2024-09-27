import styles from "./ButtonsContainer.module.css";
const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
const ButtonsContainer = ({ onButtonClick }) => {
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map(buttonName =>
        <button onClick={() => onButtonClick(buttonName)} key={buttonName} className={styles.button}>{buttonName}</button>
      )}
    </div>
  );
}

export default ButtonsContainer;