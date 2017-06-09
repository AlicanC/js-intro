/*
  require() the main script of the "express" package which is a function
    and assign it to a constant named "express"
*/
const express = require('express');

/*
  Call the express() function to create an express application
    and assign it to a constant named "app"
*/
const expressApplication = express();

/*
  Invoke expressApplication's get() method to add an HTTP GET handler to
    the express application.

  The first argument "/" means that you want the handler to handle
    HTTP requests made to "/". This handler won't handle any other path.

  The second argument is an arrow function which will be called by your
    express application when it receives a request for "/".

  It accepts two arguments: "request" and "response"

  "request" will contain information about the HTTP request and "response"
    will contain methods to help you respond to the request.
*/
expressApplication.get('/', (request, response) => {
  // Respond with "Hello world!"
  response.send('Hello world!');
});

/*
  Invoke expressApplication's listen() method to make it listen to a port for
    HTTP requests.

  The first argument "1337" is the port you want your application to listen.

  Only one application can listen to the same port. If this port is being
    listened by another application (which is unlikely for 1337), you will
    get an error and must pick another port.

  The second argument is an arrow function which will be called by your
    express application when it starts listening to the specified port and
    is ready to receive HTTP requests.
*/
expressApplication.listen(1337, () => {
  console.log('Application is now listening to HTTP requests...');
  console.log('Press CTRL+C to stop.');
});
