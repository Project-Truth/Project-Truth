 chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
  });
   
  function findRelevantArticles(){//title can be switched with keywords 
    let title = JSON.parse(getJSON())['head']
    let queryURL = 'https://newsapi.org/v2/everything?q=' +title+'&sortBy=popularity&pageSize=5&apiKey=d943dcac77304701987917fb319681d9'; 
    let bigJason = fetch(queryURL)
    return bigJason
  }

  