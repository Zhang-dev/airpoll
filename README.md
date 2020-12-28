# AirPoll App

## Setup

Download and unzip the source repository or clone it using Git. 

Frontend will be launched on port 4200, and backend on 9000, please make them free on you local machine before testing the app.

### Backend

#### How to run the backend application

- Once checked out, navigate to the `backend` folder.
- In the terminal, run `npm install` to download all dependencies.
- To run the application, execute the command `node index.js`.
- Please wait until the message `Data insertion completed.` shown on your terminal.
- Navigate to `http://localhost:9000/` in your browser, a welcome message will be shown.

#### App description

Airpoll backend is an express-based server. 

On launching the app, it will fetch data from Open AQ Platform API and insert them into a mongoDB cloud database. The link to the cloud database can be found under `backend/config/${env}.json`. By default it will fetch 100 air quality data of different locations.

It provides an api for querying all air qualtiy data: `http://localhost:9000/api/measurements`. For testing purpose, you can use `http://localhost:9000/api/measurements/removeAll` to delete all data in the cloud database.

All error logs can be retrieved from the `error.log` under the backend folder.

#### Automated tests

- Make sure the backend app is not launching, otherwise the port will be occupied with the app, the tests can not be started.
- Once checked out, navigate to the `backend` folder.
- In the terminal, run `npm i -g jest` to download jest.
- In the terminal, run `npm test` to run automated tests. Test results and code coverage will be shown in ternimal.
- Open `/backend/coverage/Icov-report/index.html` in chrome browser, the code coverage is also available.

### Frontend

#### How to run the frontend application

- Make sure the backend app is launching.
- Once checked out, navigate to the `frontend` folder
- In the terminal, run `npm install` to download all dependencies
- To run the application, execute the command `ng serve` (development mode)
- Navigate to `http://localhost:4200/` in your browser to view the application

#### App description

The Airpoll app consists of two pages, the home page and the page (Air Quality) which displays the air quality index and other relevant properties.

Before launching frontend angular app, make sure you've launched backend in order to get data for rendering.

On launch of the app, the frontend will connect the backend for fetching air quality data.

The air quality data will be redered on the "Air quality" page in a table. It will load 20 data firtly, and will load 5 more data if user scrolls to the bottom of the table until there are no more data in the database.(Infinitive scrolling)

The data can be sorted by clicking on the table header (ASC and DESC).

User can also filter data by inputing country or city name in the search field.

When users resize window to smaller size(window innerwidth less than 768), the app will switch to the mobile mode, in which the link on navigation bar will be replaced with a menu button. On clicking the menu button, a side navigation bar with the router links will be shown.

#### Automated tests

Under the frontend directive, use `ng test --code-coverage` in your terminal for automated tests. The test results will show in chrome browser. The code coverage can be retrieved on the terminal or under `frontend/coverage/acn-code-now/index.html`.

## Copyright and License

Copyright (c) 2020 Accenture AG

Code released under the MIT License.
