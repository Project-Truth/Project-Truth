//alert("Popup running")
document.addEventListener('DOMContentLoaded',function (){
document.querySelector('button').addEventListener('click', onclick, false)
function onclick() {
    chrome.runtime.sendMessage({greeting: "getPercentage"}, function(returned){
     alert(returned) })
}
if (amtSkipped>0){
    var secondPage = nextPage()
}
while (amtSkipped >0){
    sum += compare(secondPage['articles'][amtSkipped-1])
    amtSkipped--
}
var finalScore = sum/5
finalScore = finalScore*100
},false)
