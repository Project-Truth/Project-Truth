//alert("Popup running")

document.querySelector('button').addEventListener('click',onclick, false)
 async function onclick() {
    chrome.runtime.sendMessage({greeting: "getPercentage"}, function(returned){
        alert("Returned Data: " + returned.data)
     })
}
