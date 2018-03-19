import React from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import {Grid} from "semantic-ui-react"
import AppsList from "./AppsList"
import axios from "axios"

class App extends React.Component {
  state = { apps: [] }

  componentDidMount(){
    fetch("/api/apps")
    .then( response => response.json())
  }

  // addSong = (title, album, rank) => {
  //   let songInfo = { title, album, rank }
  //   fetch("/api/songs", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify(songInfo)
  //   })
  //   .then( res => res.json())
  //   .then( song=> {
  //     const {songs} = this.state
  //     this.setState({ songs: [...songs, song].sort((a, b) => a.rank - b.rank) })
  //   })
  // }

  // updateSong = (id, title, album, rank) => {
  //   let songInfo = { title, album, rank }
  //   fetch(`/api/songs/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify(songInfo)
  //   })
  //   .then( response => response.json())
  //   .then( songs => this.setState({songs: songs.sort((a, b) => a.rank - b.rank)}) )
  // }

  // deleteSong = (id) => {
  //   fetch(`/api/songs/${id}`, {method: "DELETE"})
  //   .then ( () => {
  //     const {songs} = this.state;
  //     this.setState({songs: songs.filter(s => s.id !== id) })
  //   })
  // }
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={16} computer={4}>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={10}>
              <AppsList apps={this.state.apps}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
