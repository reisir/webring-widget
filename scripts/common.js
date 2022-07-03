import sitesArr from "./sites.js";

// Get widget embed url and params
export const localURL = new URL(window.location);
export const localParams = localURL.searchParams;

// www. pattern
export const www = /^www\./im;

// Get the referrer hostname (or current page)
export const referrer = (() => {
  const r = document.referrer || document.location;
  if (!r) return;
  else return new URL(r).hostname.replace(www, "");
})();

// Find the current site from the sites array
export const currentIndex = sitesArr.findIndex(
  (s) => new URL(s.url).hostname.replace(www, "") === referrer
);

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

const noWWW = (s) => new URL(s).hostname.replace(www, "");
export const currentHost = noWWW(window.location);
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
