// All of these globals don't matter since the widget is meant to be used through an iframe
// which will create it's own browsing context aka. the globals are contained in the iframe

// Get widget embed url and params
const localURL = new URL(window.location);
const localParams = localURL.searchParams;

// Get widget elements
const $widget = document.getElementsByTagName("widget")[0];
const $current = document.getElementById("current");
const $previous = document.getElementById("previous");
const $next = document.getElementById("next");
const $title = document.getElementById("title");

// www. pattern
const www = /^www\./im;
// Get the referrer hostname (or current page)
const referrer = (() => {
  const r = document.referrer || document.location;
  if (!r) return;
  else return new URL(r).hostname.replace(www, "");
})();

// Override widget styles
{
  for (const key of localParams.keys()) {
    $widget.style.setProperty(key, localParams.get(key));
  }
}

// Set middle item text
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
  // sites is a global from ./sites.js
  // Here we monkeywrench a bunch of stuff to the array for ease of use
  sites.circular = (i) => {
    const n = sites.length;
    i += n; // prevents negative indexes ( up to -n ) from erroring
    return sites[((i % n) + n) % n];
  };
  sites.previous = (i) => sites.circular(i - 1);
  sites.next = (i) => sites.circular(i + 1);
  // You could argue that since this is valid JavaScript,
  // I'm not monkeywrenching, I'm extending Array.prototype

  const currentIndex = sites.findIndex(
    (s) => new URL(s.url).hostname.replace(www, "") === referrer
  );
  if (currentIndex === -1) console.error(`You'r not in the webring!!! D:`);

  const previous = sites.circular(currentIndex - 1);
  $previous.href = previous.url;

  const next = sites.circular(currentIndex + 1);
  $next.href = next.url;
}
