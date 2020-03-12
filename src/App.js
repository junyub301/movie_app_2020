import React, { Component } from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

/* 
 매 순간 setState를 호출 할때 마다 react는 새로운 state와 함께 render function을 호출한다.
*/

class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }
  
  componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoading , movies} = this.state;
    return ( 
    <section className="container">
      {isLoading ? ( 
      <div className="loader">
        <span className="loader__text">Loading...</span>        
      </div>
      ) : ( 
        <div className="movies">
          {movies.map(movie => (
          <Movie 
            key={movie.id} 
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image} 
            genres={movie.genres}
          />
          ))}
        </div>
      )}
    </section>
    ) 
  }
}

/* 4. Making the Movie App 하면된다  */

export default App;
