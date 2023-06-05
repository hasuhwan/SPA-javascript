export default class posts {
  constructor(target, loadPost) {
    this.target = target;
    const data = loadPost();
    console.log(data);
    const $postsContainer = document.createElement("div");
  }
}
