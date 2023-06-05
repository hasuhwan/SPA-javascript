import AbstractView from "../AbstractView.js";
import login from "./login.js";
import posts from "./posts.js";
export default class extends AbstractView {
  constructor(target) {
    super();
    this.setTitle("NodeBird");
    this.target = target;
    new login(this.target);
    new posts(this.target);
  }
}
