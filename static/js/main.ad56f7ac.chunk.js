(window["webpackJsonpmovie-list"]=window["webpackJsonpmovie-list"]||[]).push([[0],{43:function(e,t,a){e.exports=a(82)},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){},75:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(40),s=a.n(l),o=(a(48),a(3)),r=a(4),c=a(6),m=a(5),u=a(7),d=a(15),h=a(12);a(49),a(50);var v=function(){return i.a.createElement("header",{className:"flex p1",id:"nav"},i.a.createElement("h4",null,"Movie List"),i.a.createElement("nav",{className:"flexCenter"},i.a.createElement("ul",{className:"navUl flex"},i.a.createElement("li",null,i.a.createElement(d.Link,{to:"/"},"Search")),i.a.createElement("li",null,i.a.createElement(d.Link,{to:"/movies_list/"},"My List")))))};a(55);var p=function(){return i.a.createElement("div",{className:"loaderContainer flex flexCenter"},i.a.createElement("div",{className:"loader"}))},f=a(18),g=a.n(f),E=a(19),b=a(24),y=a.n(b);a(72);y.a.initializeApp({apiKey:"AIzaSyAmjtwJhPPoQjHg-o_EjC-aiSCtmGzJtzQ",authDomain:"movie-list-3d942.firebaseapp.com",databaseURL:"https://movie-list-3d942.firebaseio.com",projectId:"movie-list-3d942",storageBucket:"movie-list-3d942.appspot.com",messagingSenderId:"1080619382778",appId:"1:1080619382778:web:76dafc6c33618e08ba5643",measurementId:"G-LQSSR2GBPF"});var w=y.a.firestore(),D=(a(75),a(16)),N=a(17),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={singleMovieDetails:[],loading:!1,dataResponse:!0},a.getMovieDetails=function(){a.showLoader(),g.a.get("http://www.omdbapi.com/?i=".concat(Object.values(a.props).join(""),"&apikey=a56835b9")).then((function(e){"False"!==e.data.Response?(a.hideloader(),a.setState({singleMovieDetails:e.data,dataResponse:!0})):a.setState({dataResponse:!1})})).catch((function(e){console.log(e.message)}))},a.addMovieToList=function(){w.collection("movies").where("movieId","==",a.state.singleMovieDetails.imdbID).get().then((function(e){e.docs.length?alert("You have already added that item to the list!"):(w.collection("movies").add({favorite:!1,genre:a.state.singleMovieDetails.Genre,imdbLink:"https://www.imdb.com/title/".concat(Object.values(a.props).join("")),imdbRate:a.state.singleMovieDetails.imdbRating,movieId:a.state.singleMovieDetails.imdbID,title:a.state.singleMovieDetails.Title,type:a.state.singleMovieDetails.Type,year:a.state.singleMovieDetails.Year,image:a.state.singleMovieDetails.Poster}),alert("Added to your list"))})).catch((function(e){console.log(e.message)}))},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"showLoader",value:function(){this.setState({loading:!0})}},{key:"hideloader",value:function(){this.setState({loading:!1})}},{key:"componentDidMount",value:function(){this.getMovieDetails()}},{key:"componentDidUpdate",value:function(e,t){e.singleMovieDetails!==this.props.singleMovieDetails&&this.setState({singleMovieDetails:this.props.singleMovieDetails})}},{key:"render",value:function(){return i.a.createElement("div",{className:"detailsContainer radius"},this.state.loading?i.a.createElement(p,null):null,this.state.dataResponse?i.a.createElement("div",{className:"film"},i.a.createElement("div",{className:"info-poster radius"},i.a.createElement("a",{href:this.state.singleMovieDetails.Poster,rel:"noopener noreferrer",target:"_blank"},i.a.createElement("img",{src:this.state.singleMovieDetails.Poster,alt:"film poster",className:"block biggerImage"})),i.a.createElement("div",{className:"singleMovie"},i.a.createElement("h2",null,this.state.singleMovieDetails.Title),i.a.createElement("h3",null,"Year: ",this.state.singleMovieDetails.Year),i.a.createElement("h3",null,"Type: ",this.state.singleMovieDetails.Type),i.a.createElement("h3",null,"Genre: ",this.state.singleMovieDetails.Genre),i.a.createElement("h3",null,"IMDB Rating: ",this.state.singleMovieDetails.imdbRating),i.a.createElement("button",{className:"btn addMovieBtn radius",onClick:this.addMovieToList},"Add to watchlist"),i.a.createElement(E.HashLink,{to:"/#nav",scroll:function(e){return e.scrollIntoView({behavior:"smooth",block:"end"})},className:"topLink"},"Back To Top \xa0 ",i.a.createElement(D.a,{icon:N.b,className:"handIcon"})))),i.a.createElement("div",{className:"otherDetails flex"},i.a.createElement("h4",null,i.a.createElement("strong",null,"Actors:")," ",this.state.singleMovieDetails.Actors),i.a.createElement("h4",null,i.a.createElement("strong",null,"Awards:")," ",this.state.singleMovieDetails.Awards),i.a.createElement("h4",null,i.a.createElement("strong",null,"Runtime:")," ",this.state.singleMovieDetails.Runtime),i.a.createElement("h4",null,i.a.createElement("strong",null,"Country:")," ",this.state.singleMovieDetails.Country),i.a.createElement("p",null,i.a.createElement("strong",null,"Plot:")," ",this.state.singleMovieDetails.Plot),i.a.createElement("h4",null,i.a.createElement("strong",null,"Writer:")," ",this.state.singleMovieDetails.Writer),i.a.createElement("h3",null,i.a.createElement("strong",null,"Director:")," ",this.state.singleMovieDetails.Director))):i.a.createElement("div",null,i.a.createElement("h3",null,"No details available!")))}}]),t}(i.a.Component),M=(a(78),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={on:!1},a.toggle=function(){a.setState({on:!a.state.on})},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"movieBoxWrapper"},i.a.createElement("div",{className:"movieBox p1 grid radius"},i.a.createElement("img",{src:this.props.movie.Poster,alt:"film poster",className:"block smallImage shadow"}),i.a.createElement("div",{className:"movieInfo flex"},i.a.createElement("p",{className:"movieTitle"},this.props.movie.Title),i.a.createElement("p",{className:"movieYear"},"Year: ",this.props.movie.Year),i.a.createElement("p",{className:"movieType"},"Type: ",this.props.movie.Type)),i.a.createElement("div",{onClick:this.toggle,className:"btnDetailsWrapper flex flexCenter"},i.a.createElement("p",{className:"detailsText"},"More details"),i.a.createElement("p",{className:"arrow"},i.a.createElement(D.a,{icon:N.a})))),this.state.on&&i.a.createElement(k,this.props.movie.imdbID))}}]),t}(i.a.Component)),j=(a(79),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={movieSearchResult:a.props.movieSearchResult},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.movieSearchResult!==this.props.movieSearchResult&&this.setState({movieSearchResult:this.props.movieSearchResult})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"renderResult"},this.state.movieSearchResult.map((function(t,a){return i.a.createElement(M,{key:a,movie:t,searchValue:e.props.searchValue})})))}}]),t}(i.a.Component)),S=(a(80),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={searchValue:""},a.onChange=function(e){return a.setState({searchValue:e.target.value})},a.onKeyUp=function(e){e.preventDefault(),a.props.getMovies(a.state.searchValue)},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"searchBox flex flexCenter p1"},i.a.createElement("div",{className:"search"},i.a.createElement("h1",{className:"mb1"},"Search for movies or tv shows"),i.a.createElement("h3",{className:"mb1"},"Add movies to watchlist and mark your favorites"),i.a.createElement("div",{className:"flexCenter"},i.a.createElement("input",{type:"text",id:"search",className:"radius mb1 searchArea shadow",value:this.state.searchValue,onChange:this.onChange,autoFocus:!0,placeholder:"Enter title or keyword",onKeyUp:this.onKeyUp}),i.a.createElement("p",null,"Start typing to search..."))))}}]),t}(i.a.Component)),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={movieSearchResult:[],loading:!1,dataResponse:!0},a.getMovies=function(e){a.showLoader(),g.a.get("http://www.omdbapi.com/?s=".concat(e,"&apikey=a56835b9")).then((function(e){a.hideloader(),"False"!==e.data.Response?a.setState({movieSearchResult:e.data.Search,dataResponse:!0}):a.setState({dataResponse:!1})})).catch((function(e){console.log(e.message)}))},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"showLoader",value:function(){this.setState({loading:!0})}},{key:"hideloader",value:function(){this.setState({loading:!1})}},{key:"render",value:function(){return i.a.createElement("div",{className:"p1",id:"startSearch"},i.a.createElement(S,{getMovies:this.getMovies}),this.state.loading?i.a.createElement(p,null):null,this.state.dataResponse?i.a.createElement(j,{movieSearchResult:this.state.movieSearchResult,searchValue:this.state.searchValue}):i.a.createElement("div",null,i.a.createElement("h3",null,"Searching for title or movie not found!")))}}]),t}(i.a.Component),R=(a(81),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={fetchedDatabase:[]},a.snapshotFunction=function(e,t){e.docs.forEach((function(e){var a=e.data();a.dbId=e.id,t.push(a)})),a.setState({fetchedDatabase:t})},a.fetchMoviesCollection=function(){var e=[];w.collection("movies").get().then((function(t){a.snapshotFunction(t,e)}),(function(e){return console.log(e.message)}))},a.sortByAbc=function(){var e=[];w.collection("movies").orderBy("title").get().then((function(t){a.snapshotFunction(t,e)}),(function(e){return console.log(e.message)}))},a.sortByRating=function(){var e=[];w.collection("movies").orderBy("imdbRate").get().then((function(t){a.snapshotFunction(t,e)}),(function(e){return console.log(e.message)}))},a.getUpdatedData=function(){var e=[];w.collection("movies").get().then((function(t){t.docs.forEach((function(t){var a=t.data();a.dbId=t.id,e.push(a)})),a.setState({fetchedDatabase:e})})).catch((function(e){return console.log(e.message)}))},a.deleteItem=function(e){var t=e.target.parentElement.parentElement.getAttribute("id");w.collection("movies").doc(t).delete().then((function(){a.getUpdatedData()}))},a.addToFavorites=function(e){var t=e.target.parentElement.parentElement.getAttribute("id");w.collection("movies").doc(t).update({favorite:!0}).then((function(){a.getUpdatedData()}))},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.fetchMoviesCollection()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"watchlist p1 flex flexCenter",id:"mylist"},i.a.createElement("h1",{id:"watchlist"},"Watchlist"),i.a.createElement("div",{className:"listContainer"},i.a.createElement("div",{className:"buttons flex flexCenter"},i.a.createElement("button",{onClick:this.sortByAbc,className:"btnSort radius"},"Sort A-Z"),i.a.createElement("button",{onClick:this.sortByRating,className:"btnSort radius"},"Sort by IMDB rating")),i.a.createElement("ul",{className:"list flex flexCenter"},this.state.fetchedDatabase.map((function(t){return i.a.createElement("li",{key:t.dbId,id:t.dbId,className:"grid listItem"},i.a.createElement("div",{className:"titlesWrapper flex flexCenter"},i.a.createElement("h3",null,t.title),i.a.createElement("h5",null,"Year: ",t.year),i.a.createElement("h5",null,"Type: ",t.type),i.a.createElement("h5",null,"Genre: ",t.genre)),i.a.createElement("img",{src:t.image,alt:"film poster",className:"block listImage shadow"}),i.a.createElement("div",{className:"imdbWrapper flex"},i.a.createElement("h4",null,"Imdb Rating: ",t.imdbRate),i.a.createElement("h5",null,i.a.createElement("a",{href:t.imdbLink,rel:"noopener noreferrer",target:"_blank",className:"imdbLink"},"IMDB Link")),i.a.createElement("p",{className:t.favorite?"star yellow":"star"},"\u272f")),i.a.createElement("div",{className:"favWrapper flex flexCenter"},i.a.createElement("button",{onClick:e.addToFavorites,className:"btnList addFav radius",disabled:t.favorite},"Add to favorites"),i.a.createElement("button",{onClick:function(t){return window.confirm("Are you sure you want to delete this item?")&&e.deleteItem(t)},className:"btnList delete radius"},"Delete")))})),i.a.createElement(E.HashLink,{to:"#watchlist",scroll:function(e){return e.scrollIntoView({behavior:"smooth",block:"end"})},className:"topLink hash radius"},"Back To Top \xa0 ",i.a.createElement(D.a,{icon:N.b,className:"handIcon"})))))}}]),t}(i.a.Component)),C=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(d.BrowserRouter,null,i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"container"},i.a.createElement(v,null),i.a.createElement(h.d,{exact:!0,path:"/",component:O}),i.a.createElement(h.d,{path:"/movies_list/",component:R}))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.ad56f7ac.chunk.js.map