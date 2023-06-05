import home from "./views/home/home.js";
import profile from "./views/profile/profile.js";
import signup from "./views/signup/signup.js";
import NotFound from "./views/NotFound.js";
import nav from "./nav.js";
const router = () => {
  const routes = [
    { path: "/", view: home },
    { path: "/profile", view: profile },
    { path: "/signup", view: signup },
    { path: "/404", view: NotFound },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);
  if (!match) {
    match = {
      route: routes[routes.length - 1],
      isMatch: true,
    };
  }
  const target = document.querySelector("#app");
  new nav(target);
  new match.route.view(target);
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
