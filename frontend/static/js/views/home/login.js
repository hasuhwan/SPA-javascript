const loginFormArr = [
  { text: "이메일", name: "user-email", type: "email" },
  { text: "비밀번호", name: "user-password", type: "password" },
];
export default class login {
  constructor(target) {
    this.target = target;
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
      const $label = document.createElement("label");
      $label.htmlFor = el.name;
      $label.innerText = el.text;
      const $input = document.createElement("input");
      $input.type = el.type;
      $input.name = el.name;
      $inputDiv.appendChild($label);
      $inputDiv.appendChild($input);
      $form.appendChild($inputDiv);
    });
    $buttonDiv.appendChild($loginButton);
    $buttonDiv.appendChild($signupButton);
    $form.appendChild($buttonDiv);
    this.target.appendChild($form);
  }
}
