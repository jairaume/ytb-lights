// make all borders of the page red
document.body.style.border = "5px solid red";

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
}

// send message to background script passing on/off and a quantity

document.getElementById("btn").addEventListener("click", () => {
    chrome.runtime.sendMessage({on: true, amount: 5});
});
