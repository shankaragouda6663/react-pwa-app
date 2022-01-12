// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  let [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const result = await fetch("https://orangevalleycaa.org/api/videos").then(
        response => response.json()
      );
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Art Videos</h1>
      </header>
      {data.map(video => (
        <div key={video.id}>
          <h2>{video.name}</h2>
          <video height={200} controls src={video.video_url}></video>
        </div>
      ))}
    </div>
  );
}

export default App;
