import { sites } from "./sites.js";
if (!sites) throw Error("Browser doesn't support JS modules");

/*
 * Constants
 */

const www = /^www\./im; // www. regex pattern
const hostNoWWW = (s) => new URL(s).hostname.replace(www, "");
const currentHost = hostNoWWW(window.location);

// Find the current sites index
const currentIndex = sites.findIndex((s) => hostNoWWW(s.url) === currentHost);
if (currentIndex === -1) console.error(`${currentHost} is not in the webring`);

// Get the current site object
const currentSite =
  currentIndex === -1 ? { title: currentHost } : sites[currentIndex];

// Get the other site objects needed
const getSiteCircular = (i) => {
  const n = sites.length;
  return sites[(((i + n) % n) + n) % n];
};
const previousSite = getSiteCircular(currentIndex - 1);
const nextSite = getSiteCircular(currentIndex + 1);

/*
 * Widget
 */

// Get the widget element
const widget = document.getElementsByTagName("webring-widget")[0];
if (!widget) throw Error("Couldn't find the webring-widget element");

// Title
const title = document.createElement("span");
const titleLink = document.createElement("a");
titleLink.textContent = sites[0].title;
titleLink.href = sites[0].url;
title.id = "title";
title.append(titleLink);

// Links container
const links = document.createElement("div");
links.id = "links";

const previous = document.createElement("a");
previous.id = "previous";
previous.href = previousSite.url;
previous.innerHTML = "&larr;";
previous.classList.add("arrow");

const next = document.createElement("a");
next.id = "next";
next.href = nextSite.url;
next.innerHTML = "&rarr;";
next.classList.add("arrow");

const current = document.createElement("span");
current.id = "current";
current.textContent = currentSite.title;

// Append elements
links.append(previous, current, next);
widget.append(title, links);
