import React from "react"
import { Suspense, useEffect, useState } from "react"
import { getNowPlayingMovies } from "../utils/api"
import { Container } from "react-bootstrap"
import Loader from "../utils/Loader"


const Card = React.lazy(() => import('./Card'))

const NowPlaying = () => {
    const [popular, setPopular] = useState([])

    useEffect(() =>{     
      getNowPlayingMovies().then(res => setPopular(res))
    },[])
    
  return (
      <section id="nowPlaying" className="py-5">
          <Container>
              <h1 className="text-dark pt-4 pb-2 ps-1 headline">NOW PLAYING</h1>
              
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