// content.js
chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
  // Retrieve the list of restricted URLs from storage
  chrome.storage.sync.get(["restrictedURLs"], function (result) {
    const restrictedURLs = result.restrictedURLs;

    // Check if the current URL matches any in the restricted list
    if (restrictedURLs.some(url => details.url.includes(url))) {
      // Redirect to about:blank
      chrome.tabs.update(details.tabId, { url: "about:blank" });
    }
  });
});
