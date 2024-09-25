import React from "react"
import { Suspense, useEffect, useState } from "react"
import { getNowPlayingMovies } from "../utils/api"
import { Container } from "react-bootstrap"
import Loader from "../utils/Loader"
import '../style/playing.css'

const Card = React.lazy(() => import('./Card'))

const NowPlaying = () => {
    const [popular, setPopular] = useState([])

    useEffect(() =>{     
      getNowPlayingMovies().then(res => setPopular(res))
    },[])
    
  return (
      <section id="nowPlaying" className="py-5">
          <Container>
            <div className="headline-wrapper">
              <h1 className="text-dark headline">NOW PLAYING</h1>
            </div>             
            <div className="movies-container">
                {popular?.map((movie, i) =>(
                  <Suspense key={i} fallback={<Loader/>}>
                      <Card movie={movie}/>
                    </Suspense>
                ))}
            </div>
          </Container>
      </section>
  )
}

export default NowPlaying