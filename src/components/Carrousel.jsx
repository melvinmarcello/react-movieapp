import { useEffect, useState, React } from 'react';
import { Carousel } from 'react-bootstrap';
import { getPopularImage } from '../utils/api';
import '../style/carrousel.css'


  
const Carrousel = () =>{
  const [carrouselImg, setCarrouselImg] = useState([])
  


    useEffect (() => {
          getPopularImage().then((res) =>{
              setCarrouselImg(res)  
          })
      }, [])
    

    return( 
      <div className='carousel-wrapper'>
        <Carousel>
          {carrouselImg.map((image, k) => (
              <Carousel.Item key={k}>
                <img
                  className="d-block"
                  src={`${process.env.REACT_APP_BASEIMGURL}/original${image.imgUrl}`}
                  alt={image.title}
                />
                <Carousel.Caption>
                  <h2 className='text-uppercase'>{image.title}</h2>
                  <p>{image.overview}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          )}
          </Carousel>   
      </div>  
    )    
    
}

export default Carrousel;