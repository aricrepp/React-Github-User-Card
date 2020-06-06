import React from 'react';
import CardCreate from './components/CardCreate';
import axios from "axios";
import "./App.css"

export default class App extends React.Component {
  state = {
    myself: [],
    followers: [],
    fol_login: []
  };

  componentDidMount() {
    console.log("componentDidMount running");
    axios
      .all([axios.get("https://api.github.com/users/aricrepp"), axios.get("https://api.github.com/users/aricrepp/followers")])
      .then(axios.spread((res1, res2) => {
    
        this.setState({ myself: res1.data, followers: res2.data });

        return(
          this.state.followers.map(item => (
            axios
            .get(`https://api.github.com/users/${item.login}`)
            .then(res => (
              this.setState({...this.state.fo_login, fol_login: res.data})
            ))
            .catch(err => console.log(err))
          ))
         
        );
      }))
      .catch(err => console.log(err));

    }


  render(){
    return (
      <div className="App">
        <h1>GITHUB CARD CREATOR</h1>
        <CardCreate myself={this.state.myself} followers={this.state.followers}/>
      </div>
    );
  }
  
}

