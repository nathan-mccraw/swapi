# Star Wars API App
A database query tool that utilizes an API to return information on Star Wars characters from a database.

Use the Star Wars API App [here](https://starwars-api-app.herokuapp.com/).


![swapi_preview_image](https://user-images.githubusercontent.com/84479635/124417606-7ae19800-dd27-11eb-9639-d3fcf2abc51c.JPG)

## Installation

To use the SWAPI app:

1.  Follow this [link](https://starwars-api-app.herokuapp.com/) to use the app on your browser.

2.  To use the application locally and to obtain the code base for the application, you can either download a zip file of the code and application or you can fork this repository to make changes and maintain version control.  You can download the code in a zip file by clicking "code" -> download zip from this repository dashboard (see picture below), extract the files from the zip file and skip to step 6.  If you wish to fork this repository then go to step 3.

![download](https://user-images.githubusercontent.com/84479635/128919298-327fe649-9df5-4cb3-8104-ffa7c830fecd.JPG)

3. If you wish, you can fork this repository, which makes a copy of this repository and stores it to your repository (Github account required).

4.  Clone your repository to your local machine using the command line: [Git Clone](https://git-scm.com/docs/git-clone). This allows you to make changes to the SWAPI app,       maintain version control, and save those changes to your repository.  Cloning the app directly from this repository will not let you freely push changes to the app.

5.  Navigate to the root directory of the app.  i.e. If you navigated to C:\Users\{YOUR ACCOUNT NAME}\Documents when you ran 'git clone', then there will now be a directory at       C:\Users\{YOUR ACCOUNT NAME}\Documents\SWAPI.  All application files will now be in this folder.

6.  If you only wish to run the application, navigate to C:\Users\{YOUR ACCOUNT NAME}\SWAPI to find index.html. Open this html file with google Chrome to view the               application without viewing the code.


## Summary
This app utilizes HTML, React/JavaScript, CSS/Bootstrap, NodeJS and is deployed on Heroku via Github.  [SWAPI](https://swapi.dev/) is an API that returns a JSON
in the form of an array of objects.  This app takes this data and displays it on an HTML using React hooks.  The user may search for character name data via the 
API using a text input.  The return is displayed in increments of 10 characters.  Each character returns two additional HTTP requests to receive additional information
about that character, which is also populated in the HTML table.  React state is used to render updated information, show/hide an instructional modal, receive data from an input, and display a loading icon when waiting for an HTTP request.
 

#### Author
Nathan McCraw -- Software Developer [LinkedIn](https://www.linkedin.com/in/nathan-mccraw-5291535b/) | [Personal Website](https://www.nathanmccraw.com/)
