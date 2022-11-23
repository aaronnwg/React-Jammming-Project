
import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'

class App extends React.Component {
  render(){
    return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div class="App">
      <SearchBar />
      <div className="App-playlist">
        {/* <SearchReaults /> */}
        {/* <Playlist /> */}
      </div>
    </div>
  </div>
    )
  }
}

export default App;
