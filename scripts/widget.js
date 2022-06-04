// Get widget embed url and params
const localURL = new URL(window.location);
const localParams = localURL.searchParams;

// Get widget elements
const $widget = document.getElementsByTagName("widget")[0];
const $current = document.getElementById("current");
const $previous = document.getElementById("previous");
const $next = document.getElementById("next");
const $title = document.getElementById("title");

// Override font-family to start loading the font asap
{
  const fontFamily = localParams.get("font");
  if (fontFamily) $widget.style.fontFamily = fontFamily;
}

// Get referrer
const referrer = (() => {
  const r = document.referrer || document.location;
  if (!r) return;
  else return new URL(r).hostname;
})();

// Set middle item content
{
  $current.prepend(referrer);
}

// Allow widget title overrides
{
  const title = localParams.get("title");
  if (!title) {
  } else {
    if (title == 0 || title == "false") $title.remove();
    else $title.textContent = title;
  }
}

// Set previous and next href from sites
{
  const currentIndex = sites.findIndex((s) => s.domain === referrer);
  if (currentIndex === -1) console.error(`You'r not in the webring!!! D:`);

  const previous = sites.circular(currentIndex - 1);
  $previous.href = previous.url;

  const next = sites.circular(currentIndex + 1);
  $next.href = next.url;
}
