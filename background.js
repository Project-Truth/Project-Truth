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


   
  function findRelevantArticles(){//title can be switched with keywords 
    let title = JSON.parse(getJSON())['head']
    let queryURL = 'https://newsapi.org/v2/everything?q=' +title+'&sortBy=popularity&pageSize=5&apiKey=d943dcac77304701987917fb319681d9' 
    let bigJason = fetch(queryURL)
    return bigJason
  }
function nextPage(){
    let newQuery = 'https://newsapi.org/v2/everything?q=' +title+'&sortBy=popularity&pageSize=5&page=2&apiKey=d943dcac77304701987917fb319681d9'
    let largeJason = fetch(newQuery)
    return largeJason
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
}}
