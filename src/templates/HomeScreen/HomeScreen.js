import styles from "./home.scss";
import btn from "../button/button.scss";

function HomeScreen(props) {
  return /*html*/ `
      <div class="${styles.container}">
            <form class="${styles.form}">
                <h1 class="${styles.title}">${props.title}</h1>
                <div class="${styles.name}">${props.text}</div>
                <input type="text" id="${props.inputId}" class="${styles.inputname}">
                <div id="text-warning" class=${styles.textwarning}></div>
                <button id="${props.buttonStartId}" class="${btn.btn}">${props.buttonStartText}</button>
            </form>
      </div>
      `;
}

export default HomeScreen;
