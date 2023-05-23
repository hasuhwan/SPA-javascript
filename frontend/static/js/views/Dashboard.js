import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }
  getHtml() {
    return `
        <h1>Welcome!</h1>
		<p>This is Dashboard page.</p>
		<a href="/posts" data-link>
			View recent posts
		</a>
    `;
  }
}
