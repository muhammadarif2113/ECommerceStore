// const http = require('http')
// const fs = require('fs')
const express = require("express");
const port = 3014; 
const app = express();

// const app = express();
// const express = require("express");

const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();

// const server = http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     fs.readFile('index.html', function(error, data) { 
//         if(error){
//             res.writeHead(404)
//             res.write('Error: File Not Found')
//         } else {
//             res.write(data)

//         }
//         res.end()
//     })
// })

// server.listen(port, function(error) {
//     if(error){
//         console.log("There is an error: ", error)
//     } else {
//         console.log('Server is up and running on port: ' + port)
//         console.log('everyting works')
//     }
// })

sneaks.getProducts("Yeezy Cinder", 10, function(err, products){
    console.log(products)
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
}); 

app.listen(port, () => {
    console.log("server started on port", port); 
})

