// Gets referrer
function getReferrer() {
  const referrer = document.referrer || document.location;
  if (!referrer) return;
  const url = new URL(referrer);
  return url.hostname || "";
}

// Sets middle item content
function setCurrentItem() {
  const element = document.getElementById("current");
  element.textContent = getReferrer();
}

// Allows widget title overrides
function setWidgetTitle() {
  const url = new URL(window.location);
  const params = url.searchParams;
  const name = params.get("name");
  if (!name) return;
  const element = document.getElementById("title");
  element.textContent = params.get("name");
}

function setPreviousAndNext() {
  const referrer = getReferrer();
  const currentIndex = sites.findIndex((s) => s.domain === getReferrer());

  const previous = sites.circular(currentIndex - 1);
  const previousElement = document.getElementById("previous");
  previousElement.textContent = previous.domain;

  const next = sites.circular(currentIndex + 1);
  const nextElement = document.getElementById("next");
  nextElement.textContent = next.domain;

  console.log(previous, next);
}

setCurrentItem();
setPreviousAndNext();
setWidgetTitle();
