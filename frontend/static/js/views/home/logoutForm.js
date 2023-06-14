export default class logoutForm {
  constructor(submit, user) {
    this.submit = submit;
    this.user = user;
    this.$logoutDiv = document.createElement("div");
    this.render();
  }
  render() {
    if (this.user !== null) {
      const { nickname, Posts, Followers, Followings } = this.user;
      const $nicknameDiv = document.createElement("div");
      const $nicknameSpan = document.createElement("span");
      $nicknameSpan.innerText = nickname;
      $nicknameDiv.appendChild($nicknameSpan);
      const $logoutButton = document.createElement("button");
      $logoutButton.innerText = "로그아웃";
      const $extraDataUl = document.createElement("ul");
      const $postLi = document.createElement("li");
      const $followersLi = document.createElement("li");
      const $followingsLi = document.createElement("li");
      const arr = [
        [$postLi, "더미", Posts.length],
        [$followingsLi, "팔로잉", Followings.length],
        [$followersLi, "팔로워", Followers.length],
      ];
      arr.forEach(([tar, name, count]) => {
        const $nameSpan = document.createElement("span");
        $nameSpan.innerText = name;
        const $countSpan = document.createElement("span");
        $countSpan.innerText = count;
        tar.append($nameSpan, $countSpan);
        $extraDataUl.appendChild(tar);
      });
      this.$logoutDiv.append($nicknameDiv, $logoutButton, $extraDataUl);
      $logoutButton.addEventListener("click", (e) => {
        e.preventDefault();
        this.submit();
      });
    }
  }
}
