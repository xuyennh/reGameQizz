import { createState, logger } from "../utils";

function createIsStart() {
  const { get, update, subscribe, set, shouldUpdate } = createState(false);
  const setIsStart = (isStart) => {
    return update(() => {
      return isStart;
    });
  };
  shouldUpdate((prevIsStart, isStart) => {
    if (prevIsStart === isStart) {
      return false;
    }
    return true;
  });
  return {
    get,
    subscribe,
    set,
    setIsStart,
  };
}

const isStart = logger(createIsStart)();
export default isStart;
