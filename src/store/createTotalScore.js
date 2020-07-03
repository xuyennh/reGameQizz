import { createState, logger } from "../utils";

function createTotalScore() {
  const { get, update, subscribe, set } = createState(0);
  return {
    get,
    subscribe,
    set,
    setTotalScore: totalScore => update(score => score + totalScore)
  };
}
const totalScore = logger(createTotalScore)();
export default totalScore;
