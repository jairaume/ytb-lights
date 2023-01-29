let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {

    chrome.storage.sync.set({ color });

    console.log('Default background color set to %cgreen', 'color: ${color}');

});

// receive message from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // display message info
    console.log(request);
    console.log(sender);
    console.log(sendResponse);   

    // send back message to popup
    sendResponse({message: "Hello from background script"});
});