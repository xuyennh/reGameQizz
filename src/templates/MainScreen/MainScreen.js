import showBoard from "../Board/Board";
import styles from "./main.scss";

/**
 *
 * @param {{
 *  question: string,
 * questionNumber: number,
 * answer: [],
 * ButtonSelect: () => {};
 * nameUser: string,
 * score: number
 * }} props
 */

function MainScreen({
  question,
  questionNumber,
  Answer,
  ButtonSelect,
  nameUser,
  score,
}) {
  return /*html*/ `
        <div class="${styles.main}">
            <div class="${styles.game}">
                <h2 class="${styles.question}">${question}</h2>
                <div class="${
                  styles.questionnumber
                }">Câu số: ${questionNumber}</div>
                <div class="${styles.listanswer}">${Answer}</div>
                <div class="${styles.name}">${nameUser}</div>
                <div id="help5050" class="${styles.showhelp}"></div>
                ${ButtonSelect}
            </div>
            <div class="${styles.showscore}"> 
            <div>${showBoard()}</div> 
            <div id="clock" class="${styles.countdown}"></div>
            <div class="${styles.score}">Score:</div>
            <div class="${styles.scorequestion}">${score}</div>
            <button id="btn-stop" class="${
              styles.btnstop
            }">Dừng Cuộc Chơi</button>
            </div>
        </div>
      `;
}

export default MainScreen;
