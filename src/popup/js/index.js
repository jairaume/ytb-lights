
// This is the code that runs in the popup

let checkbox = document.getElementById("checkbox").parentElement;
checkbox.addEventListener("change", async() => {
    var full = await chrome.storage.sync.get(['on']);
    chrome.storage.sync.set({ on: !full.on });

    if(!full.on){
        checkbox.classList.add("active");
    }
    else{
        checkbox.classList.remove("active");
    }
});
