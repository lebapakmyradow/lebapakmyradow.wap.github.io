//Question 1: Create a simple Node script that converts 'www.miu.edu' 
//domain name to the equivalent IP address. (Search and learn 'dns' module, 
//resolve4) - For this exercise, you need to look up Node.js API by yourself

const dns = require('dns');
dns.resolve4('www.miu.edu', function(error, address) {
    if (error) throw error;
console.log(address);
});


//Question 2: Create a web server that's going to send a response of big image 
//(bigger then 3MB) to any client that sends a request to your specified server:port. 
//Use the best way for performance. (Try to solve this in many different ways)

//sol1
const fs = require('fs');
const server = require('http').createServer();
server.on('request', (request, response) => { fs.readFile('./tiles.jpg', (err, data) => {
        if (err) throw err;
        response.end(data); 
    });
}); 
server.listen(8000);

//sol2
const http = require('http');
const fs = require('fs');
const server2 = http.createServer(); 
server2.on('request', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' }); 
    let image = fs.readFileSync('./tiles.jpg'); 
    res.end(image, 'binary');
});
server.listen(8080);