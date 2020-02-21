
import './App.css';
import React, { useState, useEffect } from "react"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Head from "./components/Head"
import Header from "./components/Header"
import API from "./utils/API";
// import BottomNavigation from '@material-ui/core/BottomNavigation';


function App() {
  const [posts, setPosts] = useState({
    results: [],
    postsToLoad: 1
  });
  
  useEffect(() => {
    API.getPosts(1, 8).then(res => {
      setPosts({
        results: [...posts.results, ...res.data]
      });
    })
  }, [])
  
  return (
    <div>
      <Router>
        <Head />
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage posts={posts}></HomePage>
          </Route>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      {/* <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation> */}
      <Footer />
    </div>

  );
}
export default App;