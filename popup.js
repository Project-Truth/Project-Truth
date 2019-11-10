//alert("Popup running")
document.addEventListener('DOMContentLoaded',function (){
document.querySelector('button').addEventListener('click', onclick, false)
function onclick() {
    chrome.runtime.sendMessage({greeting: "getPercent"}, function(returned){
     alert(returned) })
}
},false)
