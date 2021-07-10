# Netflix Clone

A Netflix clone using [React JS](https://reactjs.org) & [Redux JS](https://redux.js.org) for the front-end, the [TMDB](https://www.themoviedb.org) API for the data and [Firebase](https://firebase.google.com) for authorization and authentication. Inspired by [this tutorial](https://www.youtube.com/watch?v=XtMThy8QKqU)

<div align="center">
  <h1><a href="http://kangelopoulos.ddns.net/netflix"> DEMO </a></h1>
</div>

## Requirements

Inside the repo there is a [.env.example file](./netflix/.env.example). Rename it to .env and fill the values with your own api keys.

For firebase you will need a firebase config file from your webapp with the following values.

```javascript
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=
```

For the image data you will need an API key from TMDB.

```javascript
REACT_APP_TMDB_API_KEY=
```

## Installation

Assuming you have [npm](https://www.npmjs.com) installed, clone the repo and run the following code:

```
npm install
```

## Usage

Inside the cloned folder run:

```
npm start
```

## Example

<p align="center">
  <img src="img/img.png" /> 
</p>
