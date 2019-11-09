"option strict";
function getJSON(){
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
}
//function generateArticles(title){//Title could be switched with a keyword list from the title/article
  //  var url = "https://newsapi.org/v2/everything?q=" + title + "&apiKey=d943dcac77304701987917fb319681d9"
    //var req = new Request(url)
    //fetch(req)
      //  .then(function(response))
        //    console.log(response.json)
//}
     