# Node Mongo JWT Token

Sample code to illustrate connecting to MongoDB from NodeJS database and authenticating a user using JWT token.

## Setup

Navigate to the folder and rename '.env-template' to '.env' and update the values, as needed

## Run the project

Run the project by using the following command in Terminal

```bash
docker-compose up -d
```

Docker will pull MongoDB and Node.js image, if needed

Navigate to `http://localhost:6868` to verify the site is functional

## Register new User

Send POST request to `http://localhost:8080/v1/register` route with appropriate body (sample below)

```
{
    "name": "Some Name",
    "email": "abc@test.com",
    "password": "123456"
}
```

## Login

Send POST request to `http://localhost:8080/v1/login` route with appropriate body (sample below)

```
{
    "email": "abc@test.com",
    "password": "123456"
}
```

This route will generate a JWT token for an authenticated User
