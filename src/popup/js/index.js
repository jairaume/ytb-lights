// This is the code that runs in the popup

let checkbox = document.getElementById("checkbox").parentElement;
let globalCont = document.getElementById("global-cont");
let sliders = document.getElementsByClassName("slider");

// When the popup opens, get the current storage and update the UI
window.onload = async() => {
    var data = await chrome.storage.sync.get(['on', 'colors']);
    updateUI(data);
}

// When the user clicks on the checkbox, change the storage and update the UI
checkbox.addEventListener("change", async() => {
    var full = await chrome.storage.sync.get(['on']);
    chrome.storage.sync.set({ on: !full.on });
    updateUI({on: !full.on});
});

// When the user changes a slider, change the value in storage
Array.from(sliders).forEach((slider) => {
    slider = slider.firstElementChild;
    
    slider.addEventListener("change", async() => {
        console.log("change on slider", slider.id, " : ", slider.value);
        var data = await chrome.storage.sync.get(['colors']);
        data.colors[slider.id] = parseInt(slider.value);
        chrome.storage.sync.set({ colors : data.colors})
    });
});



function updateUI(data){
    console.log("updateUI", data);
    if(data.on){
        checkbox.classList.add("active");
        checkbox.firstElementChild.checked = true;
    }
    else{
        checkbox.classList.remove("active");
        checkbox.firstElementChild.checked = false;
    }
    if(data.colors){
        Array.from(sliders).forEach((slider) => {
            slider = slider.firstElementChild;
            slider.value = data.colors[slider.id];
        });
    }
}

