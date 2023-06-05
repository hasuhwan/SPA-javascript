import AbstractView from "../AbstractView.js";
import login from "./login.js";
import posts from "./posts.js";
export default class extends AbstractView {
  constructor(target) {
    super();
    this.setTitle("NodeBird");
    this.target = target;
    new login(this.target);
    new posts(this.target, this.loadPost);
  }
  async loadPost() {
    const res = await fetch(`http://localhost:3065/posts?lastId=0`).then(
      (res) => res.json()
    );
    console.log(res);
    return res;
  }
}
