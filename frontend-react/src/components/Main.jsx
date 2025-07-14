import React from 'react'
import Bytton from './Button'
import Headder from './Header'
import Footer from './Footer'

function Main() {
  return (
    <>
    
      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
          <h1 className='text-light'>Stock Prediction portal</h1>
          <p className='text-light lead'>This stock prediction application utilizes machine learning techniques, specifically employing Keras, and LSTM model, integrated within the Django framework. It forecasts future stock prices by analyzing 100-day and 200-day moving averages, essential indicators widely used by stock analysts to inform trading and investment decisions.</p>
          <Bytton text='Explore now' class='btn-outline-info' url="/dashboard"/>
        </div>
      </div>
    
    </>
  )
}

export default Main