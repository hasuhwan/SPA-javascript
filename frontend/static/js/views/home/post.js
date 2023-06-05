export default class post {
  constructor(data) {
    this.data = data;
    return this.render();
  }
  render() {
    const $postContainer = document.createElement("div");
    $postContainer.className = "post_container";
    const $postImg = document.createElement("img");
    $postImg.className = "post_img";
    const $contentSpan = document.createElement("span");
    $postImg.src = this.data.Images[0]
      ? `http://localhost:3065/${this.data.Images[0].src}`
      : "";
    $contentSpan.innerHTML = this.data.content || "";
    $postContainer.appendChild($postImg);
    $postContainer.appendChild($contentSpan);
    return $postContainer;
  }
}
