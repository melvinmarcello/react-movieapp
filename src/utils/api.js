export const getPopularMovies = async () => {
    const movie = await fetch(`${process.env.REACT_APP_BASEURL}/movie/popular?page=1&api_key=${process.env.REACT_APP_APIKEY}`)
    .then((res) => res.json())
    return movie.results
}
export const getPopularImage = async () =>{
    let image = []
    await getPopularMovies().then((result) =>{
        for(let i = 0; i<5 ; i++){
            const genres = result[i].genre_ids.map(id => genreId[id])
            image.push({
                id: result[i].id,
                genres: genres,
                imgUrl:result[i].backdrop_path,
                title: result[i].title,
                overview: result[i].overview
            })   
        }
    })
        
    return image
}

export const getNowPlayingMovies = async () =>{
    const nowPlaying = await fetch(`${process.env.REACT_APP_BASEURL}/movie/now_playing?&api_key=${process.env.REACT_APP_APIKEY}`)
    .then(res => res.json())

    
    return nowPlaying.results
}
export const getTopRatedMovies = async () =>{
    const trendingMovie = await fetch(`${process.env.REACT_APP_BASEURL}/movie/top_rated?language=en-US&page=1&api_key=${process.env.REACT_APP_APIKEY}`)
    .then(res => res.json())

    
    return trendingMovie
}

export const getMovieByTitle = async (q) =>{
    const searchMovie = await fetch(`${process.env.REACT_APP_BASEURL}/search/movie?api_key=${process.env.REACT_APP_APIKEY}&query=${q}`)
    .then(res => res.json())

    return searchMovie
}

export const getMovieById = async (id) =>{
    const searchMovie = await fetch(`${process.env.REACT_APP_BASEURL}/movie/${id}?api_key=${process.env.REACT_APP_APIKEY}`)
    .then(res => res.json())

    
    return searchMovie
}

export const getTrailer = async (id) =>{
    const trailer = await fetch(`${process.env.REACT_APP_BASEURL}/movie/${id}/videos?api_key=${process.env.REACT_APP_APIKEY}`)
    .then(res => res.json())

    
    return trailer
}


export const getCast = async (id) =>{
    const credits = await fetch(`${process.env.REACT_APP_BASEURL}/movie/${id}/credits?api_key=${process.env.REACT_APP_APIKEY}`).then(res => res.json())

    return credits
}


export const genreId = 
    {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western",
        10759: "Action & Adventure",
        10762: "Kids",
        10763: "News",
        10764: "Reality",
        10765: "Sci-Fi & Fantasy",
        10766: "Soap",
        10767: "Talk",
        10768: "War & Politics"
    }
    