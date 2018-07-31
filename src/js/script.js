document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector('a[href="#home"]').classList.add("active");

  // Grab all </a> elements and convert to Array
  const aTags = Array.from(document.querySelectorAll("nav a"));
  // Loop over elements
  aTags.forEach(elem => {
    // Add click event listener to each
    elem.addEventListener("click", () => {
      // Remove all active classes
      aTags.forEach(elems => {
        elems.classList.remove("active");
      });
      // Add active class to clicked element
      elem.classList.add("active");
    });
  });

  const body = document.body;
  const elements = Array.from(document.getElementsByTagName("*"));
  const toolbar = document.getElementById("toolbar");
  const cog = document.getElementById("cog");
  const palette = document.getElementById("palette");
  const highlight = document.getElementById("highlight");

  cog.addEventListener("click", () => {
    toolbar.classList.toggle("slide-out");
    cog.classList.toggle("rotate");
  });

  palette.addEventListener("click", () => {
    palette.classList.toggle("clicked");
    body.classList.toggle("grayscale");
  });

  highlight.addEventListener("click", () => {
    highlight.classList.toggle("clicked");
    elements.forEach(elements => {
      elements.classList.toggle("outline");
    });
  });
});
