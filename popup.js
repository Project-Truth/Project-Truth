//alert("Popup running")
document.addEventListener('DOMContentLoaded',function localFunc(){
document.querySelector('button').addEventListener('click',onclick, false)
 async function onclick() {
    chrome.runtime.sendMessage({greeting: "getPercentage"}, function(returned){
     alert(returned) })
}

}
