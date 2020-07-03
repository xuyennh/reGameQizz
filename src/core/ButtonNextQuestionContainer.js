import ButtonChooseAnswer from "../templates/button/ButtonChooseAnswer";
import {
  isVisibleModal,
  answerSelect,
  currentIndex,
  answerDecisionSelect,
  isCorrect,
} from "../store";
import ModalChoseAnswer from "../templates/ModalChoseAnswer/ModalChoseAnswer";
import data from "../api/data";

export default class ButtonNextQuestionContainer {
  constructor() {
    this.handleOpenModalChooseAnswer = this.handleOpenModalChooseAnswer.bind(
      this
    );
    this.handleModalChooseAnswerOk = this.handleModalChooseAnswerOk.bind(this);
  }
  render() {
    return ButtonChooseAnswer();
  }
  // Hiển Thị Modal quyết định chọn đáp án
  handleOpenModalChooseAnswer() {
    isVisibleModal.setVisibleModal(true);
    const visibleModalState = isVisibleModal.get();
    if (answerSelect.get() === "default") {
      isVisibleModal.setVisibleModal(false);
      return;
    }
    return ModalChoseAnswer({
      children: `Bạn Có quyết định chọn đáp án này: ${answerSelect
        .get()
        .toUpperCase()}`,
      visible: visibleModalState,
      onOk: this.handleModalChooseAnswerOk,
      onCancel: this.handleModalChooseAnswerCancel,
    });
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
  // xử lí khi bấm Ok quyết định chọn đáp án
  handleModalChooseAnswerOk(onclose) {
    const { answers } = this.getQuizze();
    const answerSelectState = answerSelect.get();
    isCorrect.setIsCorrect(answers, answerSelectState);
    const isCorrectState = isCorrect.get();
    if (isCorrectState) {
      answerSelect.setNameAnswer("default");
      currentIndex.setCurrentIndex();
    }
    isVisibleModal.setVisibleModal(false);
    onclose();
  }
  handleModalChooseAnswerCancel(onclose) {
    isVisibleModal.setVisibleModal(false);
    onclose();
  }

  handleDOM() {
    const buttonChosseAnswerEl = document.getElementById("choose-answer");
    buttonChosseAnswerEl &&
      buttonChosseAnswerEl.addEventListener(
        "click",
        this.handleOpenModalChooseAnswer
      );
  }
}
