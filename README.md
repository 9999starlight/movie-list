MOVIE LIST 

Application for searching and storing movies, tv shows or games info in list. Responsive design (flexbox & grid) alows appropriate display for all devices like mobiles, tablets, monitors.

Front end - React js, CSS3

Database - Firebase Firestore realtime database - https://firebase.google.com/ - free plan limited to 1gb total stored data, simultaneous connections 100, 10gb/month bandwidth, document writes 20K/day, document reads 50k/day, document deletes 20k/day.

Application description

Search alows user to browse for movies, tv shows or games by title or keyword typed in search field. Fetching data from movie database OMDB API http://www.omdbapi.com/ - free plan is limited with 1,000 daily requests. OMDB allows "search" paramether which displays 10 movies max, with basic info. When user clicks on ‘more details' inside single result box, search is by "id" paramether which alows user to see detailed info (actors, plot, etc) for selected movie.

Firebase Firestore methods - Firebase Firestore method ‘db.collection('movies').onSnapshot()’ immediately updates and displays database movie collection. List can be sorted alfabetically or by IMDB rating. After clicking on 'Add to favorites' button yellow star appears in the movie box to mark movie as favorite and after that button is disabled. After clicking on 'Delete' button item is deleted from database.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
