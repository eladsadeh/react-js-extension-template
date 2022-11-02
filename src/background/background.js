chrome.runtime.onInstalled.addListener(() => console.log("Background scripts installed"))

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log(msg);
    sendResponse("From the background Script");
})