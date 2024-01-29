// popup.js
console.log("Popup script is running.");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Message received in popup:", request);
  if (request.keywordCount) {
    document.getElementById("keywordCount").textContent = request.keywordCount;
  }
});
