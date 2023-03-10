# medbikri interview assignment

## Features

-   Server will fetch the youtube api every 10 sec

-   access the api through graphql

-   pagination support

-   full text search

## Tech Stack

**Server:** Node, Express, Typescript, PostgreSQL, Graphql

## Installations

-   First clone this repo

-   Install node in your pc (**version 16**) [Node.js download](https://nodejs.org/)

-   Install yarn

    `npm install -g yarn`

-   Type 👇 in terminal

    `cd medbikri-interview-assignment`

-   Create .env and add env from .env.example

-   `yarn install`

-   Create a postgres database - youtubeapi

-   To create tables and schema on the database

    `npx prisma db push`

-   Type 👇 in terminal to start server

    `yarn dev`

# walkthrough

-   server fetches the youtube api in the background every 10 sec

    ![terminal_output](https://github.com/tejaswankalluri/medbikri-interview-assignment/blob/main/images/server%20output.png?raw=true)

-   access the graphql api from localhost:3000/graphql

    ![output](https://github.com/tejaswankalluri/medbikri-interview-assignment/blob/main/images/access%20api%20graphql.png?raw=true)

-   Database screenshot

    ![db](https://github.com/tejaswankalluri/medbikri-interview-assignment/blob/main/images/db.png?raw=true)
