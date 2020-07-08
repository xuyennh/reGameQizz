export default class Container {
  constructor(props) {
    this.props = { ...this.constructor.defaultProps, ...props };
    this.start();
    this.init();
  }
  start() {}
  init() {}
}

Container.defaultProps = {};
