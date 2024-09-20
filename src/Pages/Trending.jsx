import React, { useEffect, useState, Suspense } from "react"
import { Container } from "react-bootstrap"
import { getMovieByTitle, getTopRatedMovies } from "../utils/api"
import '../style/trending.css'
import Loader from "../utils/Loader"



const Card = React.lazy(() => import('../components/Card'))

const Trending = () => {
    const [trending, setTrending] = useState([])
    const [query, setQuery] = useState("")
    const [debouceQuery, setDebouceQuery] = useState("")
    
    const handleChange = (q) => {
        setQuery(q)
      }

    useEffect(() =>{
        const timeout = setTimeout(() =>{
            setDebouceQuery(query)     
    }, 500)
        
        
        return () =>{
            clearTimeout(timeout)
        }
      }, [query])

    useEffect(() =>{
        if(debouceQuery.length > 2){
            getMovieByTitle(debouceQuery).then(res => setTrending(res.results))
        }else if(debouceQuery.length < 2){
            getTopRatedMovies().then(res => setTrending(res.results))
            
        }
    }, [debouceQuery])

      const ShowMovies = () =>{
        return trending?.map((movie, i) => {
            return (
                <Suspense key={i} fallback={<Loader/>}>
                      <Card movie={movie}/>
                    </Suspense>
            )}
        )
        }
      


  return (
    <section id="trending" className="py-5">        
        <Container>
            <div className="heading-wrapper pt-5 pb-4 text-uppercase">
                <h1 className="text-white headline-title">Find Movies</h1>
                <input className="search-movie"  placeholder="search movie..." type="text" onChange={(e) => handleChange(e.target.value)} />
            </div>
            <div className="movies-container">
                <ShowMovies/>
            </div>
        </Container>
    </section>
  )
}

export default Trending