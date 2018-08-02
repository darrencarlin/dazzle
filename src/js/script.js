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
  let elements2 = Array.from(document.getElementsByTagName("*"));
  elements2.splice(0, 11);
  elements2.splice(1, 9);
  elements2.splice(38, 1);
  console.log(elements2);
  const toolbar = document.getElementById("toolbar");
  const cog = document.getElementById("cog");
  const palette = document.getElementById("palette");
  const highlight = document.getElementById("highlight");
  const enlarge = document.getElementById("enlarge");
  const reduce = document.getElementById("reduce");

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

  const changeFont = (arr, direction) => {
    for (let i = 0; i < arr.length; i++) {
      let fontSize = window
        .getComputedStyle(arr[i], null)
        .getPropertyValue("font-size");
      let value = parseInt(fontSize.slice(0, 2));
      if (direction === "positive") {
        arr[i].style.fontSize = `${(value += 1)}px`;
      } else {
        arr[i].style.fontSize = `${(value -= 1)}px`;
      }
    }
  };

  enlarge.addEventListener("click", () => {
    changeFont(elements2, "positive");
  });

  reduce.addEventListener("click", () => {
    changeFont(elements2, "negative");
  });
});
