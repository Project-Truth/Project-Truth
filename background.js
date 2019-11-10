 chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });

     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });   

 var json;

    document.addEventListener('DOMContentLoaded',
    async function onclick() {
        chrome.runtime.sendMessage({greeting: "getJSON"}, function(returned){
         json = returned})
    }
    ,false)



   
  async function findRelevantArticles(){//title can be switched with keywords 
    let title = JSON.parse(getJSON())['head']
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
    console.log(toReturn)
    return toReturn
}

async function finalPercentage(){
    var currentPage = getJSON()
    var articleLinks = findRelevantArticles()
    
    var sum = 0;
    var amtSkipped = 0
    var usedArticles
    
    for (let i = 0; i<articles['articles'].length; i++){
        let tempJSON = JSON.parse(convertHTMLtoJSON(await fetch(articleLinks(i))))
        let tempPercent = compare(tempJSON['body'])//LOOOK AT THIS WHEN YOU GET BACK
        if (tempPercent > .85){
            amtSkipped ++;
        }
        else{
            usedArticles += articles['articles'][i]
            sum+=tempPercent
        }      
    }

    if (amtSkipped>0){
        var secondPage = nextPage()
    }
    while (amtSkipped >0){
        let tempSkipJSON = JSON.parse(convertHTMLtoJSON(await fetch(secondPage(amtSkipped-1))))
        sum+= compare(tempSkipJSON['body'])
        usedArticles += (secondPage(amtSkipped))
        amtSkipped --
    }
    var finalScore = sum/5
    finalScore = finalScore*100
    
    return finalScore
}

chrome.runtime.onMessage.addListener( function y (request,sender,sendResponse)
{
    if( request.greeting === "getPercentage" )
    {
        Promise.all([finalPercentage]).then((v) =>
        {
            sendResponse({v});
        })
    }        
    })
