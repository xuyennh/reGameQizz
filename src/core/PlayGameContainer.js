import MainScreen from "../templates/MainScreen/MainScreen";
import data from "../api/data";
import { currentIndex, userName } from "../store";
import ShowAnswerContainer from "./ShowAnswerContainer";
import ButtonNextQuestionContainer from "./ButtonNextQuestionContainer";

export default class PlayGameContainer {
  constructor() {
    this.start();
    this.renderAnswer = this.renderAnswer.bind(this);
  }
  start() {
    this.showAnswerContainer = new ShowAnswerContainer();
    this.buttonNextQuestionContainer = new ButtonNextQuestionContainer();
  }
  getMainState() {
    const currentIndexState = currentIndex.get();
    const mainState = data[currentIndexState];
    return mainState;
  }
  getQuizze() {
    const { quizze } = this.getMainState();
    return quizze;
  }
  renderAnswer() {
    const { id } = this.getMainState();
    const { answers } = this.getQuizze();
    return answers
      .map((answer) => {
        return this.showAnswerContainer.render(answer, id);
      })
      .join("");
  }

  render() {
    const currentIndexState = currentIndex.get();
    const nameUser = userName.get();
    const quizze = this.getQuizze();
    return MainScreen({
      question: quizze.question,
      questionNumber: currentIndexState + 1,
      Answer: this.renderAnswer(),
      ButtonSelect: this.buttonNextQuestionContainer.render(),
      nameUser: nameUser,
      score: quizze.score,
    });
  }
  handleDOM() {
    this.showAnswerContainer.handleDOM();
    this.buttonNextQuestionContainer.handleDOM();
  }
}
