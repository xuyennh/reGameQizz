import {
  isVisibleModal,
  userName,
  currentIndex,
  helpLooker,
} from "../../store";
import { listquestion } from "../../api/randomQuestion";

export default class ButtonHelpLookerContainer {
  constructor() {
    this.handleHelpLooker = this.handleHelpLooker.bind(this);
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
  handleHelpLooker() {
    const { answers } = this.getQuizze();
    const { level } = this.getMainState();
    const helpLookerState = helpLooker.get();
    if (!helpLookerState.used) {
      helpLooker.setHelpLooker(answers, level);
    }
  }
  handleDOM() {
    const helpLookerEL = document.getElementById("helplooker");
    if (helpLookerEL) {
      helpLookerEL.addEventListener("click", this.handleHelpLooker);
    }
  }
}
