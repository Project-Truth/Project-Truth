
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
    alert("request Content:" + request.greeting)
    if( request.greeting == "getJ" )
    {
          sendResponse( {sent : getJSON() } );
    }        
    })

