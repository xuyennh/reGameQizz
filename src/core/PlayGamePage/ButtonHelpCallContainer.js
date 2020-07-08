import {
  isVisibleModal,
  userName,
  help5050,
  currentIndex,
  helpCall,
} from "../../store";
import { listquestion } from "../../api/randomQuestion";

export default class ButtonHelpCallContainer {
  constructor() {
    this.handleHelpCall = this.handleHelpCall.bind(this);
  }
  render() {}

  getMainState() {
    const currentIndexState = currentIndex.get();
    const mainState = listquestion[currentIndexState];
    return mainState;
  }
  getQuizze() {
    const { quizze } = this.getMainState();
    return quizze;
  }
  handleHelpCall() {
    const { answers } = this.getQuizze();
    const helpCallState = helpCall.get();
    if (!helpCallState.used) {
      helpCall.setHelpCall(answers);
    }
  }
  handleDOM() {
    const helpCallEL = document.getElementById("helpcall");
    if (helpCallEL) {
      helpCallEL.addEventListener("click", this.handleHelpCall);
    }
  }
}
