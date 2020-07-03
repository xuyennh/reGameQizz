import { createState, logger } from "../utils";

function createIsCorrect() {
  const { set, get, subscribe, update } = createState(true);
  const setIsCorrect = (answers, answerDescisionSelected) => {
    return update(() => {
      const { isCorrect } = answers.filter((answer) => {
        return answer.name === answerDescisionSelected;
      })[0];
      return isCorrect;
    });
  };
  return {
    set,
    get,
    subscribe,
    setIsCorrect,
  };
}

const isCorrect = logger(createIsCorrect)();

export default isCorrect;
