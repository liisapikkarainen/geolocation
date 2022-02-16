import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setIsLoading(false);
      }, (error) => {
        alert(error);
      })
    } else {
      alert('öyöyöy!!!!!!!!!!!!');
    }
  }, [])

  if (isLoading) {
    return <div><p>Loading...</p></div>
  } else {
    return (
      <div>
        <p>Sijainti: {lat.toFixed(3)},{lng.toFixed(3)}
        </p>
      </div>
    );
  }

 
}

export default App;
