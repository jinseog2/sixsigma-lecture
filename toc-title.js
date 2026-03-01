document.addEventListener("DOMContentLoaded", function() {
  var tocTitle = document.getElementById("toc-title");
  var pageTitle = document.querySelector("h1.title");
  if (tocTitle && pageTitle) {
    tocTitle.textContent = pageTitle.textContent.replace(/^[\d.\s]+/, "");
  }
});
