import { sites } from "./sites.js";

{
  const siteList = document.getElementById("webring-list");
  sites.forEach((site) => {
    const a = document.createElement("a");
    a.href = site.url;
    a.textContent = site.title;
    const li = document.createElement("li");
    li.appendChild(a);
    siteList.appendChild(li);
  });
}
