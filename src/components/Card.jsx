import { Link } from 'react-router-dom'
import '../style/card.css'


const Card = ({movie}) => {
  
  return (
    <Link key={movie.id} to={`/movie/${movie.id}`}>
      <div className="movie-wrapper">
          <div className="image-wrapper">
              <img src={`${process.env.REACT_APP_BASEIMGURL}/w400${movie?.poster_path}`} alt=""/>
          </div>
          <div className="overlay">
              <div className="movie-title">
                  <h4>{movie.title}</h4>
                  <h5>⭐{Math.round(movie?.vote_average * 10) /10}</h5>
              </div>
          </div>
      </div>      
    </Link>
  )
}


export default Card