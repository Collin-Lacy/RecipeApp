# Recipe App

## Usage

**Note:**
The urls inside config/index.js will most likely need to be changed.
Additionally the url for the `proxy` option in webpack.config.js will need to be changed to the same due to a CORS issue.   

Install and start the api in the server directory
```
cd src/server
npm i
npm run start:api
```

Install and start the client
```
cd src/client
npm i 
npm start
```

## Technical description
The app is built using React, with [React Router](https://reacttraining.com/react-router/) for routing. Data was fetched using react hooks with async/await.

For styling I used plain CSS, without a framework or CSS-in-JS approach.

Apart from this I used [Webpack](https://webpack.js.org/) with [Dev Server](https://github.com/webpack/webpack-dev-server) for development. [Babel](https://babeljs.io/) was used to convert JavaScript ES2015+ code into a backwards compatible version of JavaScript in old browsers or environments.

I chose [ESLint](https://eslint.org/) for my linter to maintain style and best practices.

I've used vanilla JavaScript ES2015+, without Flow or TypeScript.
