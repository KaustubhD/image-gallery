This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

## Steps to setup from scratch

1. `yarn create react-app`
2. Delete useless files
3. Setup ESlint and Prettier ✨ following [this](https://medium.com/javascript-in-plain-english/set-up-react-js-with-eslint-prettier-and-airbnb-cc015363a7c7)
4. Log in to 🔥base console
5. Create a new project and add a new web project
6. Copy the config displayed and add it all to the environment file
    1. Environment files should look like
        ```
        REACT_APP_apiKey=AIzaSyCk8ae1F6AboDfI2k0OT7_yeg4hEFWx7ik
        REACT_APP_authDomain=image-gallery-bf8c8.firebaseapp.com
        REACT_APP_databaseURL=https://image-gallery-bf8c8.firebaseio.com
        REACT_APP_projectId=image-gallery-bf8c8
        REACT_APP_storageBucket=image-gallery-bf8c8.appspot.com
        REACT_APP_messagingSenderId=938123897797
        REACT_APP_appId=1:938123897797:web:44088578166bec7b9cf9ac
        ```
7. Enable Cloud Storage and Cloud Firestore and change the rules so they are public (Google is your friend. If not, i am too)
8. 👍
