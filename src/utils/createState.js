export default function createState(initialState) {
  let _state = initialState;
  let _prevState = "default";
  let _listeners = [];
  let _compare;
  function _callListeners() {
    _listeners.forEach(listener => {
      listener(_state);
    });
  }
  function _callCompare() {
    if (!_compare) {
      return _callListeners();
    }
    let _isUpdate = _compare(_prevState, _state);
    _isUpdate && _callListeners();
  }
  function get() {
    return _state;
  }
  function set(state) {
    _prevState = _state;
    _state = state;
    _callCompare();
    return {
      prevState: _prevState,
      state: _state
    };
  }
  function update(getState) {
    _prevState = _state;
    _state = getState(_state);
    _callCompare();
    return {
      prevState: _prevState,
      state: _state
    };
  }
  function subscribe(listener) {
    _listeners.push(listener);
  }
  function shouldUpdate(compare) {
    _compare = compare;
  }

  return {
    get,
    set,
    update,
    subscribe,
    shouldUpdate
  };
}
