import { sites } from "./sites.js";

{
  const siteTable = document.getElementById("webring-table");

  // Header row
  const htr = document.createElement("tr");

  // Headers
  const th1 = document.createElement("th");
  th1.textContent = "Site";

  const th2 = document.createElement("th");
  th2.textContent = "Description";

  htr.append(th1, th2);
  siteTable.append(htr);

  // Site rows
  sites.forEach((site) => {
    const tr = document.createElement("tr");

    const a = document.createElement("a");
    a.href = site.url;

    const td2 = document.createElement("td");
    const a2 = a.cloneNode(true);
    a2.textContent = site.title;
    td2.append(a2);

    const td3 = document.createElement("td");
    const a3 = a.cloneNode(true);
    a3.textContent = site.description;
    td3.append(a3);

    tr.append(td2, td3);
    siteTable.appendChild(tr);
  });
}
