import { createState, logger } from "../utils";

function createUserName() {
  const { get, set, subscribe, update, shouldUpdate } = createState("");
  shouldUpdate((prevUserName, userName) => {
    if (!userName) {
      return false;
    }
    return true;
  });
  return {
    get,
    set,
    subscribe,
    setUserName: (name) => update(() => name),
  };
}

const userName = logger(createUserName)();
export default userName;
