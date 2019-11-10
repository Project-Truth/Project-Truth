//jon ur dumb
function getQuery()
{
    var query = document.getElementByID("myText.value")
    return query
}
async function query(url)
{
    var html = await fetch(url)
    return query
}




   
  async function findRelevantArticles(htmlQuery){//title can be switched with keywords 
    var title = (convertHTMLtoJSON(htmlQuery))['header'] // JSON.parsed
    let queryURL = 'https://newsapi.org/v2/everything?q=' +title+'&sortBy=popularity&pageSize=5&apiKey=d943dcac77304701987917fb319681d9' 
    let bigJason = await fetch(queryURL)
    var relevantLinks
    for (let i = 0; i< 5;i++){
        relevantLinks+= bigJason['articles'][i]['url']
    }
    return relevantLinks

  }
async function nextPage(){
    let newQuery = 'https://newsapi.org/v2/everything?q=' +title+'&sortBy=popularity&pageSize=5&page=2&apiKey=d943dcac77304701987917fb319681d9'
    let largeJason = await fetch(newQuery)
    for (let i = 0; i< 5;i++){
        nextLinks+= largeJason['articles'][i]['url']
}

function conJSON(jason){
    let temp = JSON.parse(jason)
    return temp['body'] 
}
function compare(body2){
    let orig = JSON.parse((convertHTMLtoJSON(query(getQuery()))))['body'].split(" ")
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
    orig = orig.concat(comp)
    let points = 0
    for (let i = 0; i <orig.length; i++){
        for (let j = 0; j<i; j++){
            if(orig[i] == orig[j]){
                points ++;
                orig.splice(i,1)
            }
        }
    }
    return points/orig.length
}}
function convertHTMLtoJSON(input){
    const pElements = input.getElementTagByTagName("p")
    let body
    let toReturn 
    for (e of pElements ){body+=e}
    toReturn = JSON.stringify({
        url: "none",
        header: header,
        body: body
    })
    
    return toReturn
}

async function finalPercentage(){ 
    
            
    var articleLinks = findRelevantArticles()
    
    var sum = 0;
    var amtSkipped = 0
    
    for (let i = 0; i<articleLinks.length; i++){
        let tempJSON = JSON.parse(convertHTMLtoJSON(await fetch(articleLinks[i])))
        let tempPercent = compare(tempJSON['body'])//LOOOK AT THIS WHEN YOU GET BACK
        if (tempPercent > .85){
            amtSkipped ++;
        }
        else{
            sum+=tempPercent
        }      
    }

    if (amtSkipped>0){
        var secondPage = nextPage()
    }
    while (amtSkipped >0){
        let tempSkipJSON = JSON.parse(convertHTMLtoJSON(await fetch(secondPage(amtSkipped-1))))
        sum+= compare(tempSkipJSON['body'])
        
        amtSkipped --
    }
    var finalScore = sum/5
    finalScore = finalScore*100
    alert( "finalScore:" +finalScore)
    return finalScore
}
document.getElementById('button').addEventListener('click', finalPercentage);
document.getElementById('p').innerHTML = finalPercentage()