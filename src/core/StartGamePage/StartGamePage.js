import HomeScreen from "../../templates/HomeScreen/HomeScreen";
import { textHomeScreen } from "../../api/content";
import { isStart, userName, helpLooker } from "../../store";
import route from "../../route";

export default class StartGamePage {
  constructor() {
    this._handleStartGame = this._handleStartGame.bind(this);
  }
  render() {
    // Hiển thị màn hình chính
    return HomeScreen(textHomeScreen);
  }
  _handleStartGame(event) {
    event.preventDefault();
    const inputName = document.getElementById("inputName");
    // const textWarning = document.querySelector("#text-warning");
    const { value } = inputName;
    // set isStart = true khi bắt đầu game và lấy tên người chơi nhập vào
    if (value == "") {
      return alert("Ban can nhap ten");
    }
    userName.select((userNameState) => {
      if (userNameState) {
        route.to("play_game");
      }
    });
    userName.setUserName(value);
  }
  handleDOM() {
    const buttonStartGame = document.getElementById("buttonStartId");
    if (buttonStartGame) {
      buttonStartGame.addEventListener("click", this._handleStartGame);
    }
  }
}
