//alert("Popup running")
document.addEventListener('DOMContentLoaded',function(){
   document.querySelector('button').addEventListener('click',onclick, false)
    async function onclick() {
       chrome.runtime.sendMessage({greeting: "getP"}, function(returned){
           alert("Returned Data: " + returned.data)
        })
   }
   
   },false)