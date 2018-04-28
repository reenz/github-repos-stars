# Stars in GitHub Public Repositories 

[![Build Status](https://travis-ci.org/reenz/github-repos-stars.svg?branch=master)](https://travis-ci.org/reenz/github-repos-stars)

This app will find out how many stars a GitHub user has across all their public repositories. 

I will use:

* `GitHub API` to get information about user and repository
* `NodeJs` to handle the HTTP requests and retrieve the number of stars from given repository
* `redis` as a caching layer to speed things up!

### Current Status of the App

* Currently this app can retrieve stars for one particular repository by providing user name and repository name.
* For API testing I used Nock so that I can mock the GitHub api response and my tests don't rely on actual GitHub api. I have used async and await for the first time so was not sure how to first write the test and then implement the code to pass them.
* Next step is to research about redis-async as I am using `async` and `await` for asynchronous request and redis-async will allow me to use async and await for making request to redis client.


### How to use

#### To run locally

* `git clone git@github.com:reenz/github-repos-stars.git`
* `npm install` to download the dependencies
* `npm start` to run
* open the browser and type `localhost:3000/username/reponame` to retrieve stars 
* `npm test` to run the tests

#### To run in docker container

* `git clone git@github.com:reenz/github-repos-stars.git`
* `npm install` to download the dependencies
* `docker-compose --build` to build image
* `docker-compose up -d` run in detached mode
* open the browser and type `localhost:8080/username/reponame` to retrieve stars 
* `docker-compose run web npm test` to run the tests