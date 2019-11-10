//alert("Popup running")
document.addEventListener('DOMContentLoaded',function (){
document.querySelector('button').addEventListener('click',await onclick, false)
 async function onclick() {
    chrome.runtime.sendMessage({greeting: "getPercentage"}, function(returned){
     alert(returned) })
}

}
