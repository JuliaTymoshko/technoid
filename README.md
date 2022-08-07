# Technoid overview:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The project represents a technical assignment for a development agency from Dubai - Technoid.

## Technoid project has the following functionality:

- cross-filtering (a few filters at the same time - up to 5 filters at the same time)
- forms using Formik & Formik+MUI: Get-In-Touch, Login, Edit-Data
- skeleton loader and lazy components
- login & edit data using React Context
- protected pages (only for logged in users) using AuthProvider + React Context
- conditional rendering based on authentification and user's actions
- fetching and mapping data
- custom scroll
- custom swiper
- reusable flip cards using CSS + Modal Popup window

## To start the app on your device:

### 1. Clone the project to your device using either a) SSH / b) HTTPS:

#### `git clone git@github.com:JuliaTymoshko/technoid.git`

#### `git clone https://github.com/JuliaTymoshko/technoid.git`

### 2. Open 1st terminal and run:

#### `npm run start`

It runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### 3. To simulate a server and send a POST/PUT request (Login page and EditProfile page), open 2nd simultaneous terminal (split terminal) and run:

#### `npx json-server --watch jsonserver/db.json --port 8000`

### 4. To build the app:

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
