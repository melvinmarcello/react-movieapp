import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getCast, getMovieById, getTrailer } from "../utils/api"
import '../style/detail.css'
import { Container, Row, Col } from "react-bootstrap"
import CastProfile from "../components/CastProfile"

const Detail = () => {
    const {id} =  useParams()
    const [movieDetail, setmovieDetail] = useState([])
    const [trailer, setTrailer] = useState([])
    const [cast, setCast] = useState([])

    let year = movieDetail.release_date ? movieDetail.release_date.split("-")[0] : '';

    useEffect(() =>{
        getMovieById(id).then(res => setmovieDetail(res))
        getTrailer(id).then(res => setTrailer(res))  
        getCast(id).then(res => setCast(res.cast))      
    }, [id])
                
    return (          
    <section id="movie-detail">
        <div className="mobile-title py-3 fixed-top">"{movieDetail.title}"</div>
        <div className="backdrop-wrapper" style={{backgroundImage: `url(${process.env.REACT_APP_BASEIMGURL}/original/${movieDetail.backdrop_path})`}}>
            <div className="movie-info">                          
                <h1 className="text-white">
                    {movieDetail.title} ({year})
                </h1>                                                    
                <h3 className="text-white rating"><span>⭐</span>{parseFloat(movieDetail?.vote_average).toFixed(1)}</h3>
                <p className="text-white">"{movieDetail.overview}"</p>
            </div>
        </div>
        <div className="movie-detail py-5">
            <Container>
                <Row className="align-items-start">
                    <Col>
                        <div className="trailer-wrapper">
                            {trailer.results ? 
                            <iframe allowFullScreen width={500} height={300} title={trailer?.results[0].name} src={`https://www.youtube.com/embed/${trailer?.results[0].key}`}></iframe>
                            : <iframe title="Not Available" ></iframe>
                        }                  
                        </div>                    
                    </Col>
                    <Col>
                        <div className="detail-section text-white">
                            <div className="util py-3 d-flex">
                                <span className={(movieDetail?.status === 'Released') ? `badge rounded-pill text-bg-success` : 'badge rounded-pill text-bg-danger'}>{movieDetail.status}</span>
                                <p className="runtime">{movieDetail.runtime} Minutes</p>
                            </div>
                            <h5 className="text-white py-1">Overview: </h5>                            
                            <h6 className="align-self-end">{movieDetail.overview}</h6>
                            <div className="genre-wrapper mt-4">
                            {movieDetail?.genres?.map((genre, i) => 
                                <p key={i} className="genre">{genre.name}</p>                                 
                            )}
                            </div>
                            <p className="tagline">"{movieDetail.tagline}"</p>
                        </div>                
                    </Col>
                </Row>                     
                <h1 className="text-white pt-4 ps-3">Top Cast</h1>
                    <div className="cast-wrapper">
                        {cast?.map(c => {
                            return (                                
                                <CastProfile cast={c} key={c.id}/>                                
                            )
                        })}
                        <Link className="view-more" href="">View More {'->'}</Link>
                    </div>                    
            </Container>
        </div>
    </section>
  )
}

export default Detail