module.exports = {
  name: "And Yet",
  shortDesc:
    "Alexandra takes notes.",
  url: "troubalex.com",
  authorEmail: "hallo@troubalex.de",
  authorHandle: "@troubalex",
  authorName: "Alexandra",
  postsPerPage: 4,
  socialImage: "/img/social.jpg",
  theme: {
    primary: {
      background: "white",
      text: "#293241",
      highlight: "#EE6C4D",
      tag: "#E1EDF4",
    },
    secondary: {
      background: "#D2E4EE",
      text: "#293241",
      highlight: "#EE6C4D",
      tag: "#E1EDF4",
    },
  },

  keystone: {
    comments: false,
    bookmarks: false,
    claps: false,
    login: false,
  },

  // Critical CSS results in much slower build times and uses a lot of system resources
  // turn on in production :)
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: false,
};
