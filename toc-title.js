function updateTocTitle() {
  var tocTitle = document.getElementById("toc-title");
  var pageTitle = document.querySelector("h1.title");
  if (tocTitle && pageTitle) {
    tocTitle.textContent = pageTitle.textContent.replace(/^[\d.\s]+/, "");
  }
}

updateTocTitle();

var observer = new MutationObserver(function() {
  updateTocTitle();
});

var content = document.getElementById("quarto-content");
if (content) {
  observer.observe(content, { childList: true, subtree: true });
}
