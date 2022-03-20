var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll("nav a");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      document.querySelectorAll("nav a").forEach((el) => {
        el.classList.remove("active");
      });
      var currentId = section.attributes.id.value;
      var selector = `nav a[href="#${currentId}"]`;
      document.querySelector(selector).classList.add("active");
    }
  });
};


navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});
