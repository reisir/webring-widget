import { webringUrl, webringTitle } from "./sites.js";
import { sites } from "./common.js";
if (!sites) throw Error("Browser doesn't support JS modules");

/*
 * Constants
 */

// Get the current site object
let currentSite = sites.current;
if (!currentSite) {
  console.log("Current site isn't part of the webring");
  currentSite = { title: "example", url: "example.com" };
}
const previousSite = sites.previous();
const nextSite = sites.next();

/*
 * Widget
 */

// Get the widget element
const widget = document.getElementsByTagName("webring-widget")[0];
if (!widget) throw Error("Couldn't find the webring-widget element");

// Title
const title = document.createElement("span");
const titleLink = document.createElement("a");
titleLink.textContent = webringTitle;
titleLink.href = webringUrl;
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
