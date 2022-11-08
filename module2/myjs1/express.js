//loading express module, which will return a module to create an application
const express  = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const { parse } = require("path");

//console.log(express);
// call createApplication or express function
const app = express();
//app.use(bodyParser.json())


app.get("/a",function(req,res){
    res.writeHead(200);
    res.end("hey I am A")
});

app.get("/b",function(req,res){
    res.writeHead(200);
    res.end("hey I am B")
});
// app.all('/books/*',function(req,res,next){
//     if(req.headers['username'] === "aman" &&
//     req.headers['password']=== "aman@123"){
//         next();
//     }
//     else{
//         res.setHeader('content-Type','application/json')
//         res.writeHead(401)
//         res.end(JSON.stringify({status : "authorisation failed"}))
//     }
// })

app.get("/books",function(req,res){
    // if(req.query){
    //     books = 
    // }
    console.log(req.query);
    books = getBooks();
    if(books){
        res.setHeader("Content-Type","application/json");
        res.writeHead(200);
        res.end(JSON.stringify(books))
    }
    else{
        res.writeHead(500);
    }
});

app.get("/books/:id",function(req,res,id){
    let books = getBooksById(parseInt(req.params.id));
    if(books){
        res.setHeader("Content-Type","application/json");
        res.writeHead(200);
        res.end(JSON.stringify(books))
    }
    else{
        res.writeHead(500);
    }
});

// app.post("/books",function(req,res){
//     //console.log(req.body);
//     let books = JSON.parse(JSON.stringify(req.body))
//     let success = addBook(books);
//     if(success){
//         res.setHeader("Content-Type","application/json");
//         res.writeHead(201);
//         res.end(JSON.stringify({success: true}))
//     }
//     else{
//         res.setHeader("Content-Type","application/json");
//         res.writeHead(500);
//         res.end(JSON.stringify({success: false}))
//     }
// })
app.post("/books", function(req, res) {
    let success = addBook(req.body);
    console.log(req.body);
    if(success) {
        res.setHeader('content-type', 'application/json');
        res.writeHead(201);
        res.end(JSON.stringify({success: true}));
    } else {
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify({success: false}));
    }
});

app.put("/books",function(req,res){})



app.listen(8080,()=>{
    console.log("application started");
})

function getBooks(){
    //return ["panch tantra","chacha chaudhary","alibaba 40 chor"]
    let data = fs.readFileSync("./books.json",{encoding:'utf-8',flag:'r'});
    //return data;
    return JSON.parse(data);
}

function getBooksById(id){
    let data = fs.readFileSync("./books.json",{encoding:'utf-8',flag:'r'});
    return JSON.parse(data).filter((book) => book.id=== id)
}
function addBook(book){
    let data = fs.readFileSync("./books.json");
    let jsonData = JSON.parse(data)
    jsonData.push(book)

    fs.writeFileSync("./books.json",JSON.stringify(jsonData))
    return true; 
}


// app.use(function(req,res,next){
//     if(req.headers['username'] === "aman" &&
//     req.headers['password']=== "aman@123"){
//         next();
//     }
//     else{
//         res.setHeader('content-Type','application/json')
//         res.writeHead(401)
//         res.end(JSON.stringify({status : "authorisation failed"}))
//     }
// })



app.get("/author",function(req,res){
    let authors = getAllAuthor();
    if(authors){
        res.setHeader("Content-Type","application/json");
        res.writeHead(200);
        res.end(JSON.stringify(authors))
    }
    else{
        res.writeHead(500);
    }
});

app.get("/author",function(req,res){
    let authors = getAllAuthor();
    if(authors){
        res.setHeader("Content-Type","application/json");
        res.writeHead(200);
        res.end(JSON.stringify(authors))
    }
    else{ 
        res.writeHead(500);
        res.end();
    }
    console.log("ye nhi chlega");
});


function getAllAuthor(){
    let data = fs.readFileSync("./books.json");
    let jsonData = JSON.parse(data)
    return jsonData.map((book) => book.author)
}

function removeDuplicates(author){
    let obj = {};
    for(author of authors){
        if(!obj[author.name]){
            obj[author.name]= author;
        }
    }
    return Object.values(obj);
}