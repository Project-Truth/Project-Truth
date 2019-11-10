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

chrome.runtime.onMessage.addListener( function(request,sender,sendResponse))
{
    if( request.greeting === "getJson" )
    {
           await sendResponse( {getJSON()} );
    }        
    }

