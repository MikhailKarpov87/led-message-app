# Led Message App

<img width="40%" src="https://s3.eu-central-1.amazonaws.com/github--projects/led-message-app.jpg" />

React/Redux web app built for learning purposes. App takes given input text and creates scrolling LED message generated with bitmap font. CSS Grid table and React/Redux are used to display and handle bitmap scrolling text.

[Demo](https://mikhailkarpov87.github.io/scrolling-message-app/)

### Installation

- You should have [Node](https://nodejs.org/en/) installed
- `git clone` or download this repository
- `npm install` to install dependencies
- `npm start` to start local dev server
- `npm run build` for production build

### App restrictions

For bitmap-font available symbols list is: `a-z, A-Z, !,?.-'`. When using non-listed symbols in your message error message text will be thrown instead original text. You are free to modify/add bitmap symbols in `src/constants.js` file.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
