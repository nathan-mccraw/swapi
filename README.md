# Star Wars API App
A database query tool that utilizes an API to return information on Star Wars characters.

Use the Star Wars API App [here](https://starwars-api-app.herokuapp.com/).


![swapi_preview_image](https://user-images.githubusercontent.com/84479635/124417606-7ae19800-dd27-11eb-9639-d3fcf2abc51c.JPG)




## Summary
This app utilizes HTML, React/JavaScript, CSS/Bootstrap, NodeJS and is deployed on Heroku via Github.  [SWAPI](https://swapi.dev/) is an API that returns a JSON
in the form of an array of objects.  This app takes this data and displays it on an HTML using React hooks.  The user may search for character name data via the 
API using a text input.  The return is displayed in increments of 10 characters.  Each character returns two additional HTTP requests to receive additional information
about that character, which is also populated in the HTML table.  React state is used to render updated information, show/hide an instructional modal, receive data from an input, and display a loading icon when waiting for an HTTP request.
 

#### Author
Nathan McCraw -- Software Developer [LinkedIn](https://www.linkedin.com/in/nathan-mccraw-5291535b/) [Personal Website - In Production]
