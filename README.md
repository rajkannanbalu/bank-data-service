
### Simple Bank Data Service

> Simple Bank Data Service

## Getting Started

> [[Technologies](#technologies-used) &middot;   
  [Installations](#installations) &middot; 
  [Prerequisite](#prerequisite-only-for-testing-and-if-needed-run-for-dev-also) &middot;
  [API Endpoints](#api-endpoints) &middot;     

## Technologies Used

[node]: (https://nodejs.org)

- [Node.js](node)
- [postgreSQL](node)
- [Express.js](https://expressjs.com).
- [Sequelize ORM] 


## Installations

#### Getting started

- You need to have Node and NPM installed on your computer.
- Installing [Node](node) automatically comes with npm.

#### Clone

- Clone this project to your local machine `git@github.com:rajkannanbalu/bank-data-service.git`

#### Prerequisite (only for testing and if needed run for dev also)
(Since I am using Online database for development server, for running test cases, you need to install the below tools in your local machine)
- Install postgresql
 > Run the command below
  ```shell
  (Ubuntu)
  $ sudo apt update 
  $ sudo apt install postgresql postgresql-contrib
  (Mac)
  $ brew install postgres
  $ psql -h localhost -u ${YOUR_USERNAME} -W -d banks -f data/indian_banks/indian_banks.sql (to move data to localdatabase, if you want to test using local database in development)
  ```
#### Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install
  ```
- Start your node server
  > run the command below
  ```shell
  $ npm run dev
  ```
- Use `http://localhost:8000` as base url for endpoints


## How to Test
- Use localhost:8000 as server host and use any endpoints mentioned in [API Endpoints](api_endpoints)
- run `npm start` and you can test the system

## API Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS                 |
| ------ | --------------------------------------- | ------------------------- |
| GET    | Get bank details by IFSC                        | `/v1/bank?ifsc`           |
| GET    | Get Bank Branches                      |  `/v1/bank/branches?city&name&page&size`|

## Author :man:

- Raj kannan Balasubramanian
   linkedin: https://www.linkedin.com/in/raj-kannan-balu-24709136/