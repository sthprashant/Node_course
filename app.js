/*
Core modules:
HTTPS- Launch a SSL server
HTTP - Launch a server, send request, communicate with other servers
FS - File handling
PATH
OS
*/

const http = require('http');

function rqListener(req, res){

}

http.createServer((req,res) => {
    console.log(req);
}); 


