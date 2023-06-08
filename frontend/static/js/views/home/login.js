import loginForm from "./loginForm.js";
import logoutForm from "./logoutForm.js";
export default class login {
  constructor(target) {
    this.$target = target;
    this.state = {
      login: false,
      me: null,
    };
    this.$loginContainer = document.createElement("div");
    this.$loginContainer.className = "login_container";
    this.$logoutContainer = document.createElement("div");
    this.$logoutContainer.className = "logout_container";
    this.login = new loginForm(this.submitLogin);
    this.logout = new logoutForm(this.submitLogout, this.state.me);
    this.$loginContainer.appendChild(this.login.$form);
    this.$logoutContainer.appendChild(this.logout.div);

    this.loginRender();
  }

  loginRender = () => {
    const confirm = [...this.$target.children];

    if (!this.state.login) {
      if (!confirm.includes(this.$logoutContainer)) {
        this.$target.appendChild(this.$loginContainer);
      } else {
        this.$target.replaceChild(this.$loginContainer, this.$logoutContainer);
      }
    } else {
      if (!confirm.includes(this.$loginContainer)) {
        this.$target.appendChild(this.$logoutContainer);
      } else {
        this.$target.replaceChild(this.$logoutContainer, this.$loginContainer);
      }
    }
  };
  submitLogin = async (data) => {
    try {
      const result = await fetch("http://localhost:3065/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
      if (result) {
        this.state = { ...this.state, login: true, me: result };
        this.loginRender();
      }
    } catch (err) {
      console.error(err);
    }
  };
  submitLogout = async () => {
    try {
      const result = await fetch("http://localhost:3065/user/logout", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      }).then((res) => res.json());
      if (result) {
        this.state = { ...this.state, login: false, me: null };
        this.loginRender();
      }
    } catch (err) {
      console.error(err);
    }
  };
}
