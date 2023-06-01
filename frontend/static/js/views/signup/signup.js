import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(target) {
    super();
    this.setTitle("Settings");
    console.log(target);
  }

  async getHtml() {
    return `
      <h1>Settings</h1>
      <p>You're viewing the Settings!</p>
    `;
  }
}
