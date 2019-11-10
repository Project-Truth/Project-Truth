
 function getJSON() {
     alert("getJSON in content has been called")
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
        console.log("What matt wants to Return:"+toReturn)
    return toReturn
}

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse)
{
    alert("content.js has been called")
    console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
        "from the extension");
    if( request.greeting === "getJ" )
    {
          sendResponse( {sent :getJSON()} );
    }        
    })

