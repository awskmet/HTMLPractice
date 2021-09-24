const http = require('http') //include http library in code
const fs = require('fs') //import fs library for file handling
const port=3000//what port to listen to
//create server library.creatserver()
const server =http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'}) //tell server to use html code, (200 status code means good, txt/html parse as html file, 
    fs.readFile('../htmltest.html', function(error, data){
        if (error){
            res.writeHead(404)  //404 is not found error
            console.log("error in readfile")

        }else{
            console.log("no error in readfile")
            res.write(data)

        }
        res.end()
    }) //takes file to read, and a function for error handling and all data in html file
    
})

//make server listen to port we want it to. server.listen(port to lsten on, function if theres an error)
server.listen(port, function(error){
    if(error){
        console.log("the error is", error)
    }else{
        console.log("listening on port ", port)
    }


})