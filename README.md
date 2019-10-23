MOVIE LIST 

Application for searching and storing movies, tv shows or games info in the list. 

Front end - React js, CSS3. Responsive design - flexbox & grid

Database/Authentication - Cloud Firestore, realtime database - https://firebase.google.com/docs/firestore - free plan limited to 1gb total stored data, simultaneous connections 100, 10gb/month bandwidth, document writes 20K/day, document reads 50k/day, document deletes 20k/day.

Authentication - Only registred users can create, read, update and delete items on their lists. Rendering UI depends on user's status (logged in or not). User can create account with an e-mail and password or login on existed account. User can sign up with any valid e-mail format so e-mail becomes his/hers username with no request to validate email by recieving e-mail verification request from server. Password should be minimum 6 characters long.

Application description

Search alows user to browse for movies, tv shows or games by title or keyword via typing in search field. Search is triggered by keyup event. Fetching data from movie database OMDB API http://www.omdbapi.com/ - free plan is limited with 1,000 daily requests. OMDB provides "search" paramether which displays 10 movies max, with basic info. When user clicks on ‘more details' inside single result box, search is by "id" paramether which alows user to see detailed info (actors, plot, etc) for selected movie. Click on button 'Add to watchlist' stores the item if it's not already added on the list.

Firebase Firestore methods - Firebase Firestore method ‘db.collection('movies').onSnapshot()’ immediately updates and displays database movie collection. List can be sorted alfabetically or by IMDB rating. After clicking on 'Add to favorites' button yellow star appears in the movie box to mark movie as favorite and after that button is disabled. After clicking on 'Delete' button item is removed from database.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.