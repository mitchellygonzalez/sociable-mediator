# sociable-mediator
#### Github link:  https://github.com/mitchellygonzalez/sociable-mediator

## Table of Contents
* [Description](#description)
* [Video Walkthroughs](#video-walkthroughs)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Technology Used](#technology-used)
* [Questions](#questions)
 
## Description
Many social networks function via utilizing the MongoDB database considering its speed while monitoring large amounts of data and flexibility with unstructured data. Here we'll be building APIs for a social network web application called Sociable Mediators. Users will be able to add each other as friends, share their thoughts, react to their friends' thoughts, and create a friend list. 

## Video Walkthroughs
Google Drive links of functionality on Insomnia: 
- Backend functionality of Users + Friends: 
  - https://drive.google.com/file/d/1ooIewd1XGrlkuSpBUsISmOyBeQfJQAGX/view
- Backend functionality of Thought + Reactions: 
  - https://drive.google.com/file/d/1q6XY3BAfWhkuG7a_kwipQAQM8UYXDmno/view

## User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

BONUS: Remove a user's associated thoughts when deleted.

## Installation
1. Clone this code onto a local repository.
2. Install node.js, express.js, mongoose from the command line
3. Download MongoDB from the command line (using homebrew if you're have MacOS)
4. Download Insomnia


## Usage
Instructions for MacOS:
1. Install node.js by running the following on your terminal: npm init -y
2. Install express.js by running the following on your terminal: npm install express
3. To install Mongoose npm package, run the following on your terminal: npm install mongoose
4. To download MongoDB, you'll need to have home-brew installed if you're using MacOS. If you don't have homebrew, run the following: 
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" 
5. Now that you're ready to download MongoDB, run: brew tap mongodb/brew
6. Next, run: brew install mongodb-community@6.0
7. Before heading to Insomnia, start the project by running: npm start
6. Make sure you have Insomnia downloaded and create the User, Friends, Thoughts, and Reactions folders and enter their corresponding http requests. Use the video in the description of this README.md as guidance for this step.

## Contributors
To contribute, you may clone this repo, and create a new branch to add your code. 

## Technology Used
- Node.js
- Express.js
- NoSQL
- Mongoose
- MongoDB
- JS
- JSON
- Insomnia

## Questions
Any questions, contact me via email: abc123@gmail.com
