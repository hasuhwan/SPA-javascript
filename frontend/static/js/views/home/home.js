import AbstractView from "../AbstractView.js";
import login from "./login.js";
export default class extends AbstractView {
  constructor(target) {
    super();
    this.setTitle("NodeBird");
    this.target = target;
    new login(this.target);
  }
}
