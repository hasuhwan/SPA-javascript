export default class nav {
  constructor(target) {
    this.target = target;
    this.render();
  }
  render() {
    this.target.innerHTML = `
        <nav class="nav">
        <a href="/" class="nav_link" data-link>노드버드</a>
        <a href="/profile" class="nav_link" data-link>Profile</a>
        <a href="/signup" class="nav_link" data-link>회원가입</a>
        </nav>
        `;
  }
}
