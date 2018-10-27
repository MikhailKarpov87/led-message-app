# Led Message App

Simple React/Redux web app built for learning purposes. App takes given input text and creates scrolling LED-display message with generated bitmap font.

[Demo](https://ledmessage.space)

### Installation

- You should have [Node](https://nodejs.org/en/) installed
- `git clone` or download this app
- `npm start` to start local dev server
- `npm run build` for production build

### App restrictions

For bitmap-font available symbols list is: `a-z, A-Z, !,?.-'`. When using non-listed symbols in your message error message will be thrown instead. You can modify/add bitmap symbols in `src/constants.js` file.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
