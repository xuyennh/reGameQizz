import { createState, logger } from "../utils";

function createCurrentIndex() {
  const { get, update, subscribe, set } = createState(0);
  return {
    get,
    subscribe,
    set,
    setCurrentIndex: () => update((currentIndex) => currentIndex + 1),
  };
}
const currentIndex = logger(createCurrentIndex)();
export default currentIndex;
