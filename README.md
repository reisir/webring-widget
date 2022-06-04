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

## Styling the widget

### editing or removing the title

You can remove the title by adding `?title=false` to the end of the iframe src attribute. You can also change the title by changing `false` to any text you want.

### font-family

You can change the font used by the widget by adding `?font=fontName` to the end of the iframe src attribute

Fonts available by default:

- DotGothic16
- Kosugi Maru
- Mochiy Pop P One
- Rampart One
- https://www.w3schools.com/cssref/css_websafe_fonts.asp

sadly iframes can't use fonts from your site

### example of using both title and font

```html
<iframe
  style="width: 100%"
  src="https://reisir.github.io/webring-widget/?title=false&font=DotGothic16"
  frameborder="0"
></iframe>
```

# Adding your website

Edit [scripts/sites](./scripts/sites.js) and create a push request. Or ask me on discord.

# Credits:

[Fonts](./fonts/) from https://fonts.google.com/
