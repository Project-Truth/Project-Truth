'use strict';
function getJSON() {
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
    console.log(toReturn)
    return toReturn
}
