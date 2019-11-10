var currentPage = getJSON()
var articles = findRelevantArticles()
var sum = 0;
var amtSkipped = 0
for (let i = 0; i<articles['articles'].length; i++){
    let tempPercent = compare(articles['articles'][i])//watch out for duplicates
    if (tempPercent > .85){
        amtSkipped ++;
    }
    else{
        sum+=tempPercent
    }      
}
let secondPage = nextPage()
while (amtSkipped >0){
    sum += compare(secondPage['articles'][amtSkipped-1])
    amtSkipped--
}
var finalScore = sum/5