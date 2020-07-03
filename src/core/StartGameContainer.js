import HomeScreen from "../templates/HomeScreen/HomeScreen";
import { textHomeScreen } from "../api/content";
import { isStart, userName } from "../store";

export default class StartGameContainer {
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
    const textWarning = document.querySelector("#text-warning");
    const { value } = inputName;
    const isStartState = !!value;
    // set isStart = true khi bắt đầu game và lấy tên người chơi nhập vào
    if (value == "") {
      textWarning.textContent = `Nhập Tên Trước Khi Chơi!`;
    }
    isStart.setIsStart(isStartState);
    userName.setUserName(value);
  }
  handleDOM() {
    const buttonStartGame = document.getElementById("buttonStartId");
    if (buttonStartGame) {
      buttonStartGame.addEventListener("click", this._handleStartGame);
    }
  }
}
