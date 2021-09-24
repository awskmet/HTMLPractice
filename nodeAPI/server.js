//this will be endpoint
var express = require('express'); // requre the express framework, needed for api
var app = express();
var fs = require('fs'); //require file system object, database/json file is in file system

// Endpoint to Get a list of users
app.get('/', function(req, res){
fs.readFile('../htmltestsite/htmltest.html', function(error, data){
   if (error){
      res.writeHead(404)
      console.log("error finding file")
   }else{
   res.write(data)
   }
   res.end()
})

})
app.get('/apijson', function(req, res){
    fs.readFile(__dirname + "/" + "apijson.json", 'utf8', function(err, data){
        if (err){
            res.writeHead(404)
        console.log('couldnt find file');
        }else{
        //console.log(data);
        res.end(data); // you can also use res.send(), signs/sends data to response, data is content of file
     } });
})
app.get('/userId=:id', function (req, res) {
    console.log("this is the param")
    // First retrieve existing user list
    fs.readFile( __dirname + "/" + "apijson.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       console.log("this is the param"+req.params.id)
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })
 //get email by id
 app.get('/userId=:id/email', function (req, res) {
    console.log("this is the param")
    // First retrieve existing user list
    fs.readFile( __dirname + "/" + "apijson.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       console.log("this is the param"+req.params.id)
       var email = users["user" + req.params.id].email
       console.log( email );
       res.end( JSON.stringify(email));
    });
 })
 //get user by email
 app.get('/userEmail=:email', function (req, res) {
    // First retrieve existing user list
    fs.readFile( __dirname + "/" + "apijson.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       console.log("this is the param "+req.params.email)
       var k
       console.log('length is' +Object.keys(users).length)
       for(k=1; k<=Object.keys(users).length;k++){
           console.log(k)

           if (users['user'+k].email===req.params.email+'@gmail.com'){
               console.log('index '+k+'email at this inedx'+ users['user'+k].email+'searchedindex'+req.params.email)
               break
           }
       }
       var user = users['user'+k] 
       
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })

// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})