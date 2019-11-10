"use strict";
 function getJSON() {
     alert("getJSON in content has been called")
    const pElements = document.getElementsByTagName("p")
    let body
    let toReturn
    for(e of pElements ){body += e}
    const header = document.getElementsByTagName("head").getElementsByTagName("title")
    toReturn = JSON.stringify({
        url : "none",
        header: header,
         body: body
        })
        console.log("What matt wants to Return:"+toReturn)
    return toReturn
}

chrome.runtime.onMessage.addListener(request => {
    return {data :getJSON()};
});


