import React from 'react';
import PersonalCardCreate from './components/PersonalCardCreate';
import CardCreate from './components/CardCreate';
import axios from "axios";
import "./App.css"


export default class App extends React.Component {
  state = {
    myself: [],
    followers: []
  };

  componentDidMount() {
    console.log("componentDidMount running");
    axios
      .all([axios.get("https://api.github.com/users/aricrepp"), axios.get("https://api.github.com/users/aricrepp/followers")])
      .then(axios.spread((res1, res2) => {
        this.setState({ myself: res1.data, followers: res2.data });
      }))
      .catch(err => console.log(err));
    }

  render(){
    return (
      <div className="App">
        <h1>GITHUB CARD CREATOR</h1>
        <PersonalCardCreate myself={this.state.myself}/>
        <CardCreate followers={this.state.followers}/>   
      </div>
    );
  }
  
}

