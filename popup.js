//alert("Popup running")
document.addEventListener('DOMContentLoaded',function (){
document.querySelector('button').addEventListener('click', onclick, false)
function onclick() {
    await chrome.runtime.sendMessage({greeting: "getPercentage"}, function(returned){
     alert(returned) })
}

}
