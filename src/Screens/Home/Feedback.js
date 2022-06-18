import React from 'react'
import "./Home.css"
const Feedback = ({feedback}) => {
  return (
    <div className='feedback'>
        <div className='row'>
            <img src={'/assets/'+feedback.pic} alt='user img'></img>
            <div className='text-container'>
                {feedback.text}
            </div>
        </div>
        <button className='feedback-btn'>+ Afficher Plus</button>
    </div>
  )
}

export default Feedback