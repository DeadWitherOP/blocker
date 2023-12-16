// background.js
chrome.runtime.onInstalled.addListener(function () {
  // Initialize your list of restricted URLs
  chrome.storage.sync.set({ restrictedURLs: ["abc.com"] });
});
