const loginFormArr = [
  { text: "이메일", name: "user-email", type: "email" },
  { text: "비밀번호", name: "user-password", type: "password" },
];
export default class loginForm {
  constructor(target, submit) {
    this.target = target;
    this.render();
    this.submit = submit;
  }

  render() {
    const $form = document.createElement("form");
    const $buttonDiv = document.createElement("div");
    const $loginButton = document.createElement("button");
    $loginButton.innerText = "로그인";
    const $signupButton = document.createElement("button");
    $signupButton.innerHTML = `
      <a href="/signup" class="nav_link" data-link>회원가입</a>
      `;
    loginFormArr.forEach((el) => {
      const $inputDiv = document.createElement("div");
      $inputDiv.className = `${el.name}-div`;
      const $label = document.createElement("label");
      $label.htmlFor = el.name;
      $label.innerText = el.text;
      const $input = document.createElement("input");
      $input.className = `${el.name}-input`;
      $input.type = el.type;
      $input.name = el.name;
      $inputDiv.appendChild($label);
      $inputDiv.appendChild($input);
      $form.appendChild($inputDiv);
    });
    $buttonDiv.appendChild($loginButton);
    $buttonDiv.appendChild($signupButton);
    $loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      const email = $form.querySelector(".user-email-input").value;
      const password = $form.querySelector(".user-password-input").value;
      this.submit({ email, password });
    });
    $form.appendChild($buttonDiv);
    this.target.appendChild($form);
  }
}
