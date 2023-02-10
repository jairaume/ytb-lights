// Description: Service worker for the extension

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ 
        on:false, 
        colors: {
            brightness: 5,
            contrast: 5,
            saturation: 5
        } 
    });
});


// receive "apply" from popup
chrome.storage.onChanged.addListener(()=>{
    applyScript();
});


// function called when user changes parameters
async function applyScript(request, sender, sendResponse) {
    chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["./background/js/applyFilters.js"]
        });
    });
}