import './App.css';
import Navbar from './component/myNavbar';
import { useState , useEffect } from 'react';
import Home from './component/Home';
import About  from './component/About';
import {Switch, Route} from 'react-router-dom';
import SearchView from './component/SearchView';
import MovieView from './component/MovieView';
import My404View from "./component/My404View";
import MovieBrowser from './component/MovieBrowser';

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=star%20wars&page=1&include_adult=false





function App() {

const [searchResults , setSearchResults] = useState([]);
const [ searchText , setSearchText] = useState('Searching for...');


useEffect(() => {
    if(searchText) {
     fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)
     .then(response => response.json())
     .then(data => {
         console.log(data)
         setSearchResults(data.results)
     })
    }
 
    
    
}, [searchText])




  return (
    <div>
      
      <Navbar searchText = {searchText} setSearchText = {setSearchText} />

      <Switch >
      <Route path = "/" exact>
           <Home />
      </Route>
      

      <Route path = "/About" exact>
           <About />
      </Route>

      
      <Route path = "/Movie Browser" exact>
           <MovieBrowser />
      </Route>
      
      
      <Route path = "/search">
        <SearchView keyword ={searchText}  searchResults = {searchResults}  />
      
      </Route>
      <Route path = "/movies/:id" component = {MovieView}  />
    
      <Route path="*" exact="true" component={My404View} />
     
      </Switch>
    </div>
  );
}

export default App;
