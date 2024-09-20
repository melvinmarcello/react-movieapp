const slider = document.querySelector('.slider')
const list = document.querySelector('.list')
const thumbnail = document.querySelector('.thumbnail')

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')


export const initSlider = (type) =>{
    const sliderItems = list.querySelectorAll('.item')
    const thumbnailItems = thumbnail.querySelectorAll('.item')
    if(type === 'next'){
        list.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
    }else{
        list.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[sliderItems.length])
    }
}


