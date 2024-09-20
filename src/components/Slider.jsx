import '../style/slider.css'
import { useEffect, useState } from 'react';
import { getPopularImage } from '../utils/api';

const Slider = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [carrouselImg, setCarrouselImg] = useState([])
  

  useEffect(() => {
    const slider = document.querySelector('.slider');
    const list = document.querySelector('.list');
    const thumbnail = document.querySelector('.thumbnail');

    getPopularImage().then((res) =>{
      setCarrouselImg(res)  
    })
        
    
    const initSlider = (type) => {
      const sliderItems = list.querySelectorAll('.item');
      const thumbnailItems = thumbnail.querySelectorAll('.item');
      if (type === 'next') {
        list.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
      } else {
        list.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        
      }
      clearTimeout(runAutoplay)
      runAutoplay = setTimeout(() => {
        nextBtn.click()
      }, 10000);
    };
        
    const handleClick = (type) => {
      initSlider(type);
      slider.classList.add(type);     
      setIsDisabled(true) 

      setTimeout(() => {
        slider.classList.remove('next');
        slider.classList.remove('prev');
        setIsDisabled(false)
      }, 2000);
    };

  const prevBtn = document.querySelector('#prev');
  const nextBtn = document.querySelector('#next');
  // autoplay
  let runAutoplay = setTimeout(() => {
    nextBtn.click()
  }, 10000);

    prevBtn.addEventListener('click', () => handleClick('prev'));
    nextBtn.addEventListener('click', () => handleClick('next'));

    // Clean up event listeners when the component unmounts
    return () => {
      prevBtn.removeEventListener('click', () => handleClick('prev'));
      nextBtn.removeEventListener('click', () => handleClick('next'));
    };
  }, []); 

  return (    
      <div className="slider">
        <div className="list">
        {
          carrouselImg.map((img, i) => (
            <div className="item" key={i}>
                  <img src={`${process.env.REACT_APP_BASEIMGURL}/original${img.imgUrl}`}
                  alt={img.title} />
                  <div className="detail">                      
                      <div className="name">{img.title}</div>
                      <p className='genres'>{img.genres.join(' / ')}</p>
                      <p className="desc">{img.overview}</p>
                      <a href={`/movie/${img.id}`} className='more-details'>More Details &raquo;</a>
                  </div>
              </div>
          ))
        }                                      
          </div>
      <div className="thumbnail">
      {
          carrouselImg.map((img, i) => (
            <div className="item" key={i}>
            <img src={`${process.env.REACT_APP_BASEIMGURL}/original${img.imgUrl}`}
                  alt={img.title} />
            <div className="detail">
              <div className="name">{img.title}</div>              
            </div>
          </div>
          ))
        }
          
        <div className="navigation">
        <button id='prev' disabled={isDisabled}>&lt;</button>
        <button id='next' disabled={isDisabled}>&gt;</button>
        </div>
      </div>

      <div className="loaders"></div>
    </div>
    
  )
}

export default Slider

