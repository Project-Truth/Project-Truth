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

function conJSON(jason){
    let temp = JSON.stringify(jason)
    return temp['body'] 
}
function compare(body2){
    let orig = conJSON(getJSON()).split(" ")
    let comp = body2.split(" ")
    for (let i = 0; i <orig.length; i++){
        for (let j = 0; j<i; j++){
            if(orig[i] == orig[j]){
                orig.splice(i,1)
            }
        }

    }

    for (let i = 0; i <comp.length; i++){
        for (let j = 0; j<i; j++){
            if(comp[i] == comp[j]){
                orig.splice(i,1)
            }
        }

    }
    let percent = getPercent(orig, comp)
    return percent
}    

function getPercent(orig, comp){
    orig.concat(comp)
    let points = 0
    for (let i = 0; i <orig.length; i++){
        for (let j = 0; j<i; j++){
            if(orig[i] == orig[j]){
                points ++;
                orig.splice(i,1)
            }
        }
    return points/orig.length
}
