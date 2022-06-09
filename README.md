# webring-widget

webring thing. [live demo](https://reisir.github.io/webring-widget/examples.html)

# Usage

Add an element called webring-widget and the script to generate it on your site.

```html
<webring-widget>
  <script
    type="module"
    src="https://reisir.github.io/webring-widget/scripts/widget.js"
    defer
  ></script>
</webring-widget>
```

# Styling the widget

a [base stylesheet](styles/widget.css) is available for the widget, you can include it on your site or use it as a base to style the widget yourself

```html
<link
  rel="stylesheet"
  href="https://reisir.github.io/webring-widget/styles/widget.css"
/>
```

Here's an example of the HTML the script generates, you can use it as a reference on how to style the widget

```html
<webring-widget>
  <span id="title">AMV Sashimi Webring</span>
  <div id="links">
    <a id="previous" href="/">←</a>
    <span id="current">site.title</span>
    <a id="next" href="/">→</a>
  </div>
</webring-widget>
```

# Joining the webring

Edit [scripts/sites](./scripts/sites.js) and create a push request. Or ask me on discord.

# Extra

## list of all the sites in the webring

```html
<ul id="webring-list">
  <script
    type="module"
    src="https://reisir.github.io/webring-widget/scripts/list.js"
    defer
  ></script>
</ul>
```

a [base stylesheet](styles/list.css) is available for the list, you can include it on your site or use it as a base to style the list yourself

```html
<link
  rel="stylesheet"
  href="https://reisir.github.io/webring-widget/styles/list.css"
/>
```

## table of all the sites in the webring

```html
<table id="webring-table">
  <script
    type="module"
    src="https://reisir.github.io/webring-widget/scripts/table.js"
    defer
  ></script>
</table>
```

a [base stylesheet](styles/table.css) is available for the table, you can include it on your site or use it as a base to style the table yourself

```html
<link
  rel="stylesheet"
  href="https://reisir.github.io/webring-widget/styles/table.css"
/>
```

## button to get a random site on the webring

```html
<button id="random-site">Random Site</button>
<script
  type="module"
  src="https://reisir.github.io/webring-widget/scripts/random.js"
  defer
></script>
```

# Credits:

- [Fonts](./fonts/) from https://fonts.google.com/
