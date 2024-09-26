var timer = 0;
setInterval(() => {
  timer += 1;
}, 1000);

// set default link here:
const defaultLink = "https://gdg.community.dev/e/m6jj8r/"

const redirectLinks = [
  { param: "?hunt=sahil", link: "https://github.com/Sandhu-Sahil" },
  { param: "?hunt=vishesh", link: "https://github.com/entropyconquers" },
  { param: "?hunt=tanay", link: "https://github.com/TanayK07" },
  { param: "?hunt=sanat", link: "https://instagram.com/sanatbhatia?igshid=YmMyMTA2M2Y=" },
  { param: "?hunt=entry", link: "https://gdsc-jiit128.tech/bitbox-validation" },
  { param: "?hunt=CrypticHunt", link: "https://cypher-dash.netlify.app/" },
  { param: "?hunt=CipherDash", link: "https://cipher-dash.netlify.app/" },
  { param: "?hunt=vaibhav", link: "https://github.com/VaibhavKatariya" },
];

const redirect = () => {

  if (window.location.search === "") {
    window.location.replace(defaultLink);
    return;
  }

  const foundLink = redirectLinks.find(
    (item) => item.param === window.location.search
  );

  if (foundLink) {
    window.location.replace(foundLink.link);
    return;
  }

  // If no param match found go to default link
  window.location.replace(defaultLink);

};

setTimeout(() => {
  redirect();
}, 5633);
