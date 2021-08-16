/*
Version: 0.1
Purpose:  Sample Edgeworkers example
Constructs reponse "Hello World - EdgeWorkers Example" with 200 Ok status code
*/


export function onClientRequest (request) {
  request.respondWith(
    200, {},
    '<html><body><h1>Hello World - Akamai EdgeWorkers Example</h1></body></html>');
}

export function onClientResponse (request, response) {
  response.setHeader('X-Edge-Workers', 'Akamai EdgeWorkers sample');
}