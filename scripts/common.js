// Location of the webring landing page
export const webringUrl = "https://bentovid.com/webring";

// Title of the webring widget
export const webringTitle = "BentoVid Webring";

import sitesArr from "./sites.js";

// Get widget embed url and params
export const localURL = new URL(window.location);
export const localParams = localURL.searchParams;

// www. pattern
export const www = /^www\./im;
const noWWW = (s) => new URL(s).hostname.replace(www, "");
export const currentHost = noWWW(window.location);

// Get the referrer hostname (or current page)
export const referrer = (() => noWWW(document.referrer || document.location))();

// Find the current site from the sites array
export const currentIndex = (() => {
  let ci = sitesArr.findIndex(({ url }) => noWWW(url) === currentHost);
  if (ci != -1) return ci;
  return sitesArr.findIndex(({ url }) => noWWW(url) === referrer);
})();

// sites is a global from ./sites.js
// Here we monkeywrench a bunch of stuff to the array for ease of use
sitesArr.circular = (i) => {
  const n = sitesArr.length;
  i += n; // prevents negative indexes ( up to -n ) from erroring
  return sitesArr[((i % n) + n) % n];
};
sitesArr.current = sitesArr[currentIndex];
sitesArr.previous = (i = currentIndex) => sitesArr.circular(i - 1);
sitesArr.next = (i = currentIndex) => sitesArr.circular(i + 1);

sitesArr.random = (i = currentIndex) => {
  const otherSites = sitesArr.filter((s) => noWWW(s.url) !== currentHost);
  return otherSites[Math.floor(otherSites.length * Math.random())];
};

const replace = (url) => window.location.replace(url);
export const previousSite = () => replace(sitesArr.previous().url);
export const nextSite = () => replace(sitesArr.next().url);
export const randomSite = () => (window.location.href = sitesArr.random().url);

export const sites = sitesArr;
export default sites;
