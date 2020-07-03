import StartGameContainer from "./StartGameContainer";
import PlayGameContainer from "./PlayGameContainer";
import {
  answerDecisionSelect,
  answerSelect,
  currentIndex,
  isStart,
  isVisibleModal,
  totalScore,
  userName,
  isCorrect,
} from "../store";

export default class QuizzGame {
  constructor(props) {
    this.props = props;
    this.start();
    this.init();
  }
  start() {
    this.startGameContainer = new StartGameContainer();
    this.playGameContainer = new PlayGameContainer();
    this.init = this.init.bind(this);
    isStart.subscribe(this.init);
    isCorrect.subscribe(this.init);
    isStart.subscribe(this.init);
    userName.subscribe(this.init);
    currentIndex.subscribe(this.init);
  }
  render() {
    const isStartState = isStart.get();
    const isCorrectState = isCorrect.get();
    if (!isCorrectState) {
      return `abc`;
    }
    if (isStartState) {
      return this.playGameContainer.render();
    }
    return this.startGameContainer.render();
  }
  handleDOM() {
    this.startGameContainer.handleDOM();
    this.playGameContainer.handleDOM();
  }
  init() {
    const { el } = this.props;
    el.innerHTML = this.render();
    this.handleDOM();
  }
}
