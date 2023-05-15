# Workable movierama challenge

## Introduction

This solution provides endpoints with basic authedication functionality along with a CRUD API for movies. For this challenge a postgres database with sample data has been created in https://api.elephantsql.com/.

## Run solution

Open project folder and type the following commands:

`npm install`

`npm start`

A web server will start at http://localhost:8081.

### Sample Data
In the created postgres database there are some sample data (users, movies, user votes)

## API

## Sign up
`POST /api/auth/register`
### Request
    curl --location --request POST 'http://localhost:8001/api/auth/register'
    --header 'Content-Type: application/json' 
    --data-raw '
    {
        "firstName": "Sam",
        "lastName" : "Smith",
        "email": "sam.smith@gmail.com",
        "password": "secret"
    }'
  
### Response
Returns a user object along with refresh and access tokens

    {
    "user": {
        "id": 2,
        "firstName": "Sam",
        "lastName": "Smith",
        "email": "sam.smith@gmail.com",
        "password": "$2b$10$I.G7earjaMyWeO6ZT1oGP.VF7zLYYi2OuO.sCJEmk4VleBGli/9Di",
        "updatedAt": "2023-03-30T09:26:06.527Z",
        "createdAt": "2023-03-30T09:26:06.527Z"
    },
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJTYW0iLCJsYXN0TmFtZSI6IlNtaXRoIiwiZW1haWwiOiJzYW0uc21pdGhAZ21haWwuY29tIiwicGFzc3dvcmQiOiJzZWNyZXQiLCJpYXQiO jE2ODAxNjgzNjcsImV4cCI6MTY4MDE3MTk2N30.jzyNk41S8w7hwCr-UinkDsObW8VsH-4_RSsOEoCyFx8",
        "refreshToken": "dd5088b33b798f90079d5d59b7092c898ec693c7c7553a88efeee5ad618aa24ac522f94759e20000"
    }

## Login
`POST /api/auth/login`
### Request
    curl --location --request POST 'http://localhost:8081/api/auth/login'
    --header 'Content-Type: application/json' 
    --data-raw '
    {
        "email": "john.doe@gmail.com",
        "password": "secret"
    }'
  
### Response
Returns a user object along with refresh and access tokens. The access token should be used in the header of movies requests having as key:Authorization and value the value of the token provided in the response below

    {
    "user": {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@gmail.com",
        "password": "$2b$10$CrESUwPMNA.5KyW1bgEjOe7Ly/MSRXxDKdwwom4amvtNLHREOAi2.",
        "createdAt": "2023-03-30T07:28:20.277Z",
        "updatedAt": "2023-03-30T07:28:20.277Z"
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLmRvZUBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJpYXQiOjE2ODAxNjc2MDYsImV4cCI6MTY4MDE3MTIwNn0.ei-_pgBOyHJyiAZrh93Jgbjp2a3_N1vjFB8gig0rNLc",
    "refreshToken": "5c90a4d68b5f98c38534c42394e1569e27d081af834ce510f2b7da9272e4dde0a7461604364d3de2"
    }
 
## Get user movies
`GET /api/movies/user`
### Request
    curl --location --request GET 'http://localhost:8081/api/movies/user'
    --header 'Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLmRvZUBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJpYXQiOjE2ODAxNjkwOTcsImV4cCI6MTY4MDE3MjY5N30.pS6QBCBgqtYiQ9cotrDoLW80Apr8vjb_BmqRKC30IoU' 
    --header 'Content-Type: application/json' 
    --data-raw '
    {
        "userId" : 1
    }

### Response
Returns array of movie objects that have been submitted by the requested user

    [
    {
        "id": 1,
        "title": "MyMovie",
        "description": "Doe",
        "userId": 1,
        "likes": 0,
        "hates": 0,
        "createdAt": "2023-03-30T07:28:21.236Z",
        "updatedAt": "2023-03-30T07:28:21.236Z"
    },
    {
        "id": 2,
        "title": "MyMovie2",
        "description": "Doe",
        "userId": 1,
        "likes": 0,
        "hates": 0,
        "createdAt": "2023-03-30T07:28:21.318Z",
        "updatedAt": "2023-03-30T07:28:21.318Z"
    }
]

or `Invalid token! (HTTP 401)` in case of unathorized action

## Get movies
This is an unauthorized endpoint, and it will be the first page of the movierama portal. All movies are listed here and they can be sorted by  likes, hates, submitted date

`GET /api/movies/`
### Request
    curl --location --request GET 'http://localhost:8081/api/movies?sort=createdAt&order=DESC'
    --header 'Content-Type: application/json' 

### Response
Returns array of movie objects based on sorting criteria (likes, hates, createdAt) and orderding (ASC, DESC)

    [
    {
        "id": 3,
        "title": "MyMovieSam",
        "description": "Sam",
        "userId": 2,
        "likes": 0,
        "hates": 0,
        "createdAt": "2023-03-30T07:28:21.400Z",
        "updatedAt": "2023-03-30T07:28:21.400Z"
    },
    {
        "id": 2,
        "title": "MyMovie2",
        "description": "Doe",
        "userId": 1,
        "likes": 0,
        "hates": 0,
        "createdAt": "2023-03-30T07:28:21.318Z",
        "updatedAt": "2023-03-30T07:28:21.318Z"
    },
     {
        "id": 1,
        "title": "MyMovie",
        "description": "Doe",
        "userId": 1,
        "likes": 0,
        "hates": 0,
        "createdAt": "2023-03-30T07:28:21.236Z",
        "updatedAt": "2023-03-30T07:28:21.236Z"
    }
]

## Create movie
`POST api/movies/create`
### Request

    curl --location --request POST 'http://localhost:8081/api/movies/create'
    --header 'Content-Type: application/json' 
    --header 'Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLmRvZUBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJpYXQiOjE2ODAxNjk4NTUsImV4cCI6MTY4MDE3MzQ1NX0.IgiZvQgScgVt93i4G8q9wRqh8FEJUDnOkvUI8sBY2fw'
    --data-raw  ' 
    {
        "title": "This is a wonderful movie",
        "description": "Nice movie"
    }'
  
### Response
Returns the created movie object

    {
        "id": 4,
        "title": "This is a wonderful movie",
        "description": "Nice movie",
        "userId": 1,
        "updatedAt": "2023-03-30T09:51:25.796Z",
        "createdAt": "2023-03-30T09:51:25.796Z",
        "likes": 0,
        "hates": 0
    }

or `Invalid token! (HTTP 401)` in case of unathorized action

## Like movie
`POST api/movies/like`
### Request

    curl --location --request POST 'http://localhost:8081/api/movies/like'
    --header 'Content-Type: application/json' 
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLmRvZUBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJpYXQiOjE2ODAxNjk4NTUsImV4cCI6MTY4MDE3MzQ1NX0.IgiZvQgScgVt93i4G8q9wRqh8FEJUDnOkvUI8sBY2fw'
    --data-raw  ' 
    {
      "userId" :1, 
      "movieId":1
    }'
  
### Response
Can return one of the following messages
* Your vote has been submitted! (HTTP 200)
* You have already voted for this movie or your are voting your own movie! (HTTP 412)
* Invalid token! (HTTP 401)

## Hate movie
`POST api/movies/hate`
### Request

    curl --location --request POST 'http://localhost:8081/api/movies/hate'
    --header 'Content-Type: application/json' 
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLmRvZUBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJpYXQiOjE2ODAxNjk4NTUsImV4cCI6MTY4MDE3MzQ1NX0.IgiZvQgScgVt93i4G8q9wRqh8FEJUDnOkvUI8sBY2fw'
    --data-raw  ' 
    {
      "userId" :1, 
      "movieId":1
    }'
  
### Response
Can return one of the following messages
* Your vote has been submitted! (HTTP 200)
* You have already voted for this movie or your are voting your own movie! (HTTP 412)
* Invalid token! (HTTP 401)

## Retract movie votes
`DELETE api/movies/retract`
### Request

    curl --location --request DELETE 'http://localhost:8081/api/movies/retract'
    --header 'Content-Type: application/json' 
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLmRvZUBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJpYXQiOjE2ODAxNjk4NTUsImV4cCI6MTY4MDE3MzQ1NX0.IgiZvQgScgVt93i4G8q9wRqh8FEJUDnOkvUI8sBY2fw'
    --data-raw  ' 
    {
      "userId" :1, 
      "movieId":1
    }'
  
### Response
Can return one of the following messages
* Your vote has been deleted! (HTTP 200)
* Invalid token! (HTTP 401)

## Notes
The provided solution is focused on the backend part (REST Api), most of front end parts are mocked with sample data. 
