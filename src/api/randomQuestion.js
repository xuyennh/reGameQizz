import data from "./data";
import { random } from "../utils";
import { config } from "./config";

function levelEasy(data) {
  return data.filter((item) => {
    return item.level === "easy";
  });
}

function levelNormal(data) {
  return data.filter((item) => {
    return item.level === "normal";
  });
}

function levelHard(data) {
  return data.filter((item) => {
    return item.level === "hard";
  });
}

function listQuestion() {
  const easy = random.ramdomAllvalue(levelEasy(data));
  const normal = random.ramdomAllvalue(levelNormal(data));
  const hard = random.ramdomAllvalue(levelHard(data));
  return {
    easy: [...easy, ...normal],
    normal: [...normal, ...hard],
    hard: [...hard],
  };
}
const questions = config.maximum_question / 3;
const listquestion = [
  ...listQuestion().easy.slice(0, 4),
  ...listQuestion().normal.slice(0, 3),
  ...listQuestion().hard.slice(0, 2),
];

export { listquestion };
