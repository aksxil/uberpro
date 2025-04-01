const http = require('http');   
const app = require('./app'); // Import the Express app
const port = process.env.PORT || 3000; // Set the port from environment variables or default to 3000


const server = http.createServer(app); // Create an HTTP server using the Express app

server.listen(port,()=>{
    // console.log(firstname + " is running on port " + port); // Log the server start message
    console.log("Server is running on http://localhost:" + port); // Log the server URL
})