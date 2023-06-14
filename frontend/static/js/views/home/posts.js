import post from "./post.js";
export default class posts {
  constructor(target) {
    this.target = target;
    this.state = {
      data: [],
      loading: true,
      lastId: 0,
      hasMorePosts: true,
    };
    this.throttle = {
      load: false,
    };
    this.$postsContainer = document.createElement("div");
    this.$postsContainer.className = "posts_container";
    this.target.appendChild(this.$postsContainer);
    this.loadPost();
    window.addEventListener("scroll", () => {
      if (this.throttle.load) {
        return;
      } else {
        this.throttle = { load: true };
        setTimeout(() => {
          this.throttle = { load: false };
          this.onScroll();
        }, 500);
      }
    });
  }
  async loadPost() {
    try {
      const res = await fetch(
        `http://localhost:3065/posts?lastId=${this.state.lastId}`
      ).then((res) => res.json());
      this.state = {
        ...this.state,
        data: res,
        loading: true,
        lastId: res[res.length - 1].id,
        hasMorePosts: res.length === 10,
      };
      this.render();
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    if (this.state.loading) {
      const $fragile = document.createDocumentFragment();
      this.state.data.forEach((data) => {
        $fragile.appendChild(new post(data));
      });
      this.$postsContainer.appendChild($fragile);
    }
  }
  onScroll() {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 300
    ) {
      if (this.state.hasMorePosts) {
        this.loadPost();
      }
    }
  }
}
