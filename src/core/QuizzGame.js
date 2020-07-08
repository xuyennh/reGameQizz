import { Container } from "../utils";
import StartGamePage from "./StartGamePage/StartGamePage";
import PlayGamePage from "./PlayGamePage/PlayGamePage";
import LoseGamePage from "./LoseGamePage/LoseGamePage";
import WinGamePage from "./WinGamePage/WinGamePage";
import { listquestion } from "../api/randomQuestion";

import {
  answerDecisionSelect,
  answerSelect,
  currentIndex,
  isVisibleModal,
  totalScore,
  userName,
  isCorrect,
  help5050,
  helpCall,
  helpLooker,
} from "../store";
import route from "../route";
export default class QuizzGame extends Container {
  start() {
    this.startGamePage = new StartGamePage();
    this.playGamePage = new PlayGamePage();
    this.loseGamePage = new LoseGamePage();
    this.winGamePage = new WinGamePage();
    this.init = this.init.bind(this);
    isCorrect.subscribe(this.init);
    userName.subscribe(this.init);
    currentIndex.subscribe(this.init);
    help5050.subscribe(this.init);
    helpCall.subscribe(this.init);
    helpLooker.subscribe(this.init);
    route.subscribe(this.init);
  }
  renderRoutes() {
    const { url } = route.get();
    switch (url) {
      case "lose_game":
        return this.loseGamePage.render();
      case "win_game":
        return this.winGamePage.render();
      case "play_game":
        return this.playGamePage.render();
      default:
        return this.startGamePage.render();
    }
  }
  render() {
    return this.renderRoutes();
  }
  handleDOM() {
    this.startGamePage.handleDOM();
    this.playGamePage.handleDOM();
    this.loseGamePage.handleDOM();
    this.winGamePage.handleDOM();
  }
  init() {
    const { el } = this.props;
    el.innerHTML = this.render();
    this.handleDOM();
  }
}
