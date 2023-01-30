//Script to apply filters to the video according to user-specified parameters

// collect user parameters from google storage
async function getParametersFromGoogleStorage(){
    return await chrome.storage.sync.get(['on', 'colors']);
}
// calculates a value between 0 and 10 into a value between 0 and 2
function translate(value) {
    return (value / 5);
}


// apply filters to the video
async function applyFilters() {
    // if current tab is not youtube, return
    if(!document.getElementById("cinematics")) return;

    // get parameters from google storage
    var parameters = await getParametersFromGoogleStorage().then((result) => {
        return result;
    });

    // get the video element
    let cinematics = document.getElementById("cinematics").firstChild;
    if(parameters.on){
        cinematics.style.width = "100vw";
        cinematics.style.height = "100vh";
        cinematics.style.position = "fixed";
    }
    else{
        cinematics.style.width = "100%";
        cinematics.style.height = "100%";
        cinematics.style.position = "relative";
    }

    // make it brighter
    cinematics.style.filter = "brightness(",
    translate(parameters.colors.brightness),
    ") contrast(",
    translate(parameters.colors.contrast),
    ") saturate(",
    translate(parameters.colors.saturation),
    ")";
    
}

applyFilters()


