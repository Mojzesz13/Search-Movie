import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends Component {
  state = {
    movies: '',
  };
  onTermSubmit = async (term) => {
    const result = await youtube.get('/search', {
      params: { q: term },
    });

    this.setState({ movies: result });
    console.log(this.state.movies);
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        {/* <div>{this.state.movies.map((obj)=>{
          
        })}</div> */}
      </div>
    );
  }
}

export default App;
