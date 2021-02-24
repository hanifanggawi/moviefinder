import {useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Movies from './components/Movies'
import MovieDetail from './components/MovieDetail'


function App() {
  //api key for tmdb api
  const api_key = process.env.REACT_APP_TMDB_API_KEY

  // Fetch Currently popular movies from tmdb api
  const fetchPopularMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
    const data = await res.json()

    setMovies(data.results)
    return data.results
  }

  const [movies, setMovies] = useState( async () => {
    fetchPopularMovies()
  })

  // Fetch Movies by keyword from tmdb api
  const fetchMovies = async (keyword) => {
    console.log(api_key)
    if (keyword) {
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${keyword}`)
      const data = await res.json()
  
      setMovies(data.results)
      return data.results
    } else {
      setMovies([])
      return []
    }
  }

  return (
    <Router>
    <div className="app">
      <Navbar/>
      <div className='container'>
      <Route path='/movie/:id' component={MovieDetail} />
      <Route path='/' exact render={(props) => (
        <>
          <SearchBar onSearch={fetchMovies}/>
          <Movies movies={movies} />
        </>
      )}/>
      </div>
      
      
    </div>
    </Router>
  );
}

export default App;
