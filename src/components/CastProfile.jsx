import React from 'react'
import person from '../assets/person.jpg'


const CastProfile = ({cast}) => {    
    
  return (
    <div className="profile-wrapper">
        <img className='cast-image' src={cast.profile_path ? `${process.env.REACT_APP_BASEIMGURL}/w400${cast?.profile_path}` : person} alt={cast.original_name} />
        <p className='original-name'>{cast?.original_name}</p>
        <p className='character-name'>{cast?.character}</p>
    </div>
  )
}

export default CastProfile