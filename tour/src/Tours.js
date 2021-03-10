import React from 'react';
import './index.css';
import './App.css';
import Tour from './Tour'
const Tours = ({tours, removeTour}) => {
    return (
        <section className="container">
            <div className="title">
            <h2>Tours Available</h2>
            <div className="underline"></div>
            </div>
            <div>
                {tours.map((tour) => {
                    return (
                        <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
                    )
                })}
            </div>
            
        </section>
        )
}

export default Tours
