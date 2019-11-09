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
function compare(body, body2){
    var orig = body.split(" ")
    var comp = body2.split(" ")
    for (var i = 0; i <orig.length; i++){
        for (var j = 0; j<i; j++){
            if(orig[i] == orig[j]){
                orig.splice(i,1)
            }
        }

    }

    for (var i = 0; i <comp.length; i++){
        for (var j = 0; j<i; j++){
            if(comp[i] == comp[j]){
                orig.splice(i,1)
            }
        }

    }
    var percent = getPercent(orig, comp)
    return percent
}    

function getPercent(orig, comp){
    orig.concat(comp)
    var points = 0
    for (var i = 0; i <orig.length; i++){
        for (var j = 0; j<i; j++){
            if(orig[i] == orig[j]){
                points ++;
                orig.splice(i,1)
            }
        }
    return points/orig.length
}
