const sites = [
  { domain: "amv.tools", url: "https://amv.tools/" },
  { domain: "sashimi.khat.us", url: "https://sashimi.khat.us" },
  {
    domain: "vidderscorner.wordpress.com",
    url: "https://vidderscorner.wordpress.com/",
  },
  { domain: "honouproductions.net.net", url: "https://honouproductions.net/" },
];

// monkeywrench a circular access method to the array
sites.circular = (i) => {
  const n = sites.length;
  i += n; // prevents negative indexes ( up to -n ) from erroring
  return sites[((i % n) + n) % n];
};

// monkeywrench previous and next getters to the array
sites.previous = (i) => sites.circular(i - 1);
sites.next = (i) => sites.circular(i + 1);

// You could argue that since this is valid JavaScript,
// I'm not monkeywrenching, I'm extending Array.prototype
