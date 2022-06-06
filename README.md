# webring-widget

webring thing. responsive

# Usage

It's recommended to wrap the widget in another element and make the widget size according to the container.

Example of embedding the widget in a header

```html
<div id="header" style="width: 100%; height: 2rem; position: fixed; top: 0;">
  <iframe
    style="width: 100%; height: 100%"
    src="https://reisir.github.io/webring-widget/"
    frameborder="0"
  ></iframe>
</div>
```

# Styling the widget

You can use any css property as a query parameter to style the widget (container)

## editing or removing the title

You can change the default title by adding `?title=text` to the end of the iframe src attribute. To remove the title, set `?title` to `false` or `0`.

## font-family

You can change the font used by the widget by adding `?fontFamily=fontName` to the end of the iframe src attribute

Fonts available by default:

- DotGothic16
- Kosugi Maru
- Mochiy Pop P One
- Rampart One
- https://www.w3schools.com/cssref/css_websafe_fonts.asp

Sadly iframes can't use fonts from your site. All of the named fonts support Japanese.

## changing the link color

The widget uses a custom css property called --link-color to control the color of the links. It works like the rest eg. `?--link-color=red`

## styling example

```html
<iframe
  style="width: 100%"
  src="https://reisir.github.io/webring-widget/?title=false&font-family=DotGothic16&--link-color=red&color=white"
  frameborder="0"
></iframe>
```

# Joining the webring

Edit [scripts/sites](./scripts/sites.js) and create a push request. Or ask me on discord.

# Extra

Script to make a list of all the sites in the webring:

```html
<ul id="site-list"></ul>
<script src="https://reisir.github.io/webring-widget/scripts/sites.js"></script>
<script defer>
  const siteList = document.getElementById("site-list");
  sites.forEach((site) => {
    const a = document.createElement("a");
    a.href = site.url;
    a.textContent = site.title;
    const li = document.createElement("li");
    li.appendChild(a);
    siteList.appendChild(li);
  });
</script>
```

Script to make a table of all the sites in the webring

```html
<table id="site-list">
  <tr>
    <th>Title</th>
    <th>Url</th>
    <th>Description</th>
  </tr>
</table>
<script src="https://reisir.github.io/webring-widget/scripts/sites.js"></script>
<script defer>
  const siteList = document.getElementById("site-list");
  sites.forEach((site) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = site.title;
    const td2 = document.createElement("td");
    const a = document.createElement("a");
    a.href = site.url;
    a.textContent = site.title;
    td2.appendChild(a);
    const td3 = document.createElement("td");
    td3.textContent = site.description;
    [td1, td2, td3].forEach((td) => tr.appendChild(td));
    siteList.appendChild(tr);
  });
</script>
```

# Credits:

- [Fonts](./fonts/) from https://fonts.google.com/
