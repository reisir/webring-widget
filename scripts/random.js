import sites from "./sites.js";

const noWWW = (s) => new URL(s).hostname.replace(/^www\./im, "");
const currentHost = noWWW(window.location);
const otherSites = sites.filter((s) => noWWW(s.url) !== currentHost);

function randomSite() {
  window.location =
    otherSites[Math.floor(otherSites.length * Math.random())].url;
}

document.getElementById("random-site").onclick = (e) => randomSite();
