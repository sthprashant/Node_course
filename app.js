/*
Core modules:
HTTPS- Launch a SSL server
HTTP - Launch a server, send request, communicate with other servers
FS - File handling
PATH
OS
*/

const http = require('http');
const express = require('express');

const app = express (); // initialising express object

app.use((req, res, next) => {
    console.log('in the middleware');
    next(); // allows the request to continue to the next middleware in line
}); 
//add a new middleware function, accepts array of req handlers and other usecases. 
//next is a funtion that weill be passed to call back to allow the request to travel to the next request

app.use((req, res, next) => {
    console.log('in another middleware');

    //sending the response
    res.send('<h1> hello from express </h1>'); 
    // send automatically set the content type
    //can set ,manually using res.setHeader()
}); 


const server = http.createServer(app);
server.listen(3000);



