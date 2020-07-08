function createHistory() {
  let info = {};
  const listeners = [];
  function callListeners(url, data, title) {
    window.history.pushState(data, title, url);
    info = {
      url,
      data,
      title,
    };
    listeners.forEach((listener) => {
      queueMicrotask(() => {
        listener({ url, data, title });
      });
    });
  }
  return {
    to(url, data = {}, title = "") {
      callListeners(url, data, title);
    },
    redirect(url) {
      const data = {};
      const title = "";
      callListeners(url, data, title);
    },
    get() {
      return info;
    },
    subscribe(listener) {
      info = {
        url: document.location.pathname.replace(/^\//g, ""),
        data: {},
        title: "",
      };
      listeners.push(listener);
    },
  };
}

export default createHistory;
