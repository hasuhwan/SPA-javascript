import loginForm from "./loginForm.js";
import logoutForm from "./logoutForm.js";
export default class login {
  constructor(target) {
    this.target = target;
    this.state = {
      login: false,
      me: null,
    };
    this.$loginContainer = document.createElement("div");
    this.$loginContainer.className = "login_container";
    this.$logoutContainer = document.createElement("div");
    this.$logoutContainer.className = "logout_container";
    new loginForm(this.$loginContainer, this.submitLogin);
    new logoutForm(this.$logoutContainer);
    this.render();
  }

  render() {
    const confirm = [...this.target.children];
    console.log(this.state.login);
    if (!this.state.login) {
      if (!confirm.includes("div_logout_container")) {
        this.target.appendChild(this.$loginContainer);
      } else {
        this.target.replaceChild(this.$loginContainer, this.$logoutContainer);
      }
    } else {
      if (!confirm.includes("div_login_container")) {
        this.target.appendChild(this.$logoutContainer);
      } else {
        this.target.replaceChild(this.$logoutContainer, this.$loginContainer);
      }
    }
  }
  async submitLogin(data) {
    try {
      const result = await fetch("http://localhost:3065/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
      //   this.state = { ...this.state, login: true, me: result };
      console.log(this.state);
      this.render();
    } catch (err) {
      console.error(err);
    }
  }
}
