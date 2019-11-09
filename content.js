function generateArticles(title){//Title could be switched with a keyword list from the title/article
    var url = "https://newsapi.org/v2/everything?q=" + title + "&apiKey=d943dcac77304701987917fb319681d9"
    var req = new Request(url)
    fetch(req)
        .then(function(response))
            console.log(response.json)
}
     