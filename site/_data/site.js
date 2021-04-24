module.exports = {
  name: "Alexandra's log",
  shortDesc:
    "Alexandra takes note(s).",
  url: "troubalex.com",
  authorEmail: "hallo@troubalex.de",
  authorHandle: "@troubalex",
  authorName: "Alexandra",
  postsPerPage: 4,
  socialImage: "/img/social.jpg",
  theme: {
    primary: {
      background: "white",
      text: "black",
      highlight: "#A442A0",
    },
    secondary: {
      background: "black",
      text: "white",
      highlight: "#EFC0FE",
    },
  },

  // Critical CSS results in much slower build times and uses a lot of system resources
  // turn on in production :)
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: false,
};
