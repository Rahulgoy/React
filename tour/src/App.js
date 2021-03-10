import React, { useState, useEffect } from 'react'
import './App.css';
import Loading from './Loading';
import Tours from  './Tours';
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, settours] = useState([]);

  const removeTour = (id) =>{
    const newTours = tours.filter((tour) => tour.id !== id);
    settours(newTours);
  }
  const fetchTours = async () => {
    setLoading(true);

    try{
    const response = await fetch(url);
    const tours = await response.json();
    console.log(tours);
    setLoading(false);
    settours(tours)
    } catch (error){
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(
    () => {
      fetchTours();
    }, []
  );

  if(loading){
    return (<main>
      <Loading/>
    </main>
    );
  }

  if (tours.length === 0){
    return (
      <main>
        <h2>No tours</h2>
        <button className="btn" onClick={fetchTours}>Fetch Tours</button>
      </main>
    )
  }


  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
