// This is the code that runs in the popup

let checkbox = document.getElementById("checkbox").parentElement;
let globalCont = document.getElementById("global-cont");
let sliders = document.getElementsByClassName("slider");
console.log(sliders);



checkbox.addEventListener("change", async() => {
    var full = await chrome.storage.sync.get(['on']);
    chrome.storage.sync.set({ on: !full.on });

    if(!full.on){
        checkbox.classList.add("active");
        globalCont.classList.add("active");
    }
    else{
        checkbox.classList.remove("active");
        globalCont.classList.remove("active");
    }
});

Array.from(sliders).forEach((slider) => {
    slider = slider.firstElementChild;
    console.log(slider)
    slider.addEventListener("change", async() => {
        console.log("change on slider", slider.id, " : ", slider.value);
        //chrome.storage.sync.set({colors[slider.id]:colors})
    });
    
});

