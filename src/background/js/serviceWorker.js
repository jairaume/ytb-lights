// Description: Service worker for the extension

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
    chrome.storage.sync.set({ 
        on:false, 
        colors: {
            brightness: 2,
            contrast: 1.5,
            saturation: 2
        } 
    });

    chrome.storage.sync.get(['on'], (result) => {
        console.log('On currently is ' + result.on);
    });
    chrome.storage.sync.get(['colors'], (result) => {
        console.log('Colors currently are ' , result.colors);
    });

    console.log("Default settings initialized");
});



// receive "apply" from popup
chrome.runtime.onMessage.addListener(applyScript);
chrome.storage.onChanged.addListener(()=>{
    console.log("storage changed")
    applyScript();
});

// function called when user changes parameters
async function applyScript(request, sender, sendResponse) {
    console.log("j'applique le script");
    chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
        console.log(tab)
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["./background/js/applyFilters.js"]
        });
    });
    console.log("script applied");
}