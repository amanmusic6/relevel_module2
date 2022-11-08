let http = require('http');

let requestListener = function(request,response){
    if(request.url === '/books'){
        response.setHeader('content-type','application/json');
        response.writeHead(200);
        response.end(JSON.stringify(getBooks()));
    }
    else if(request.url === '/authors'){
        response.writeHead(200);
        response.end(JSON.stringify(getAuthor()));
    }
    response.end('Hello world')
}
const server = http.createServer(requestListener)
server.listen(8080);
function getBooks(){
    return [
        {
            name : "shiva triology",
            author : "Amish tripathi"
        },
        {
            name : "rich dad poor dad",
            author : "gumnaam chaurasia"
        }
    ]
}
function getAuthor(){
    return [
        {
            name : "shiva tripathi"
        },
        {
            name : "Gumnam chaurasia"
        }
    ]
}