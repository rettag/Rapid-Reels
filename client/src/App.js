import './App.css';
import React, { useEffect, useState } from 'react';
import { fetchSomething, fetchCreateVideo } from './api';

function App() {
  const [data, setData] = useState(null);
  const [selectedVideos, setSelectedVideos] = useState([]);

  const handleVideoInsert = (event) => {
    const newVideo = event.target.files[0];
    setSelectedVideos([...selectedVideos, newVideo]);
    console.log(selectedVideos);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSomething();
      console.log("RESULT:", result)
      setData(result.text);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>MERN App</h1>
      <p>Data from the backend: {data}</p>

      <div>
        <input type="file" multiple onChange={handleVideoInsert} />
        <button onClick={fetchCreateVideo.bind(null, selectedVideos)}>Create</button> {/* TODO: Cant click unless its the same amount of videos as required template / Also cant click while upload is happening */}
      </div>
    </div>
  );
}

export default App;

