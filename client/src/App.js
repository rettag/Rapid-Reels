import './App.css';
import React, { useEffect, useState } from 'react';

// import Video from "./out/video.mp4";

/* API Functions:
(1) --> fetchCreateVideo()
(2) --> CreateVideo()
(3) --> Download()
(4) --> Clean()
*/

// Sanity Check Fetch
export const fetchSomething = async () => {
  return fetch('http://localhost:5000')
  .then(response => response.json())
  .then(data => { console.log('recieved data:', data); return data; })
  .catch(error => console.log(error));
};

/*
  App Component
*/

function App() {
  const [data, setData] = useState(null);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const num_videos_required = {"pumpitup": 3, "sking": 5};

  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);


  // Handle Added Video
  const handleVideoInsert = (event) => {
    const newVideo = event.target.files[0];
    console.log(newVideo);
    setSelectedVideos([...selectedVideos, newVideo]);
    console.log(selectedVideos);
  };


  // Handle Removed Video
  const handleRemoveVideo = (index) => {
    setSelectedVideos((prevSelectedVideos) => {
      const updatedVideos = [...prevSelectedVideos];
      updatedVideos.splice(index, 1);
      return updatedVideos;
    });
  }


  // Handle Template Click
  const handleTemplateChange = (value) => {
    // Add Templates Here!
    let pumpitup = document.getElementById("pumpitup");
    let sking = document.getElementById("sking");

    pumpitup.style.backgroundColor = "rgb(98, 70, 255)";
    sking.style.backgroundColor = "rgb(98, 70, 255)";

    setSelectedTemplate(value);
    let button = document.getElementById(value);
    button.style.backgroundColor = "rgb(84, 10, 190)";
  };


  // Handle Create Another Video
  const handleCreateAnotherVideo = () => {
    Clean();
    setIsDone(false);
  };

  // Handle Create Video
  const fetchCreateVideo = async (videos) => {
    setIsLoading(true);
    const formData = new FormData();

    for (let i = 0; i < videos.length; i++) {
      formData.append('videos', videos[i]);  // Append each video file to the FormData object
    }

    console.log(formData.get('videos'));

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => { console.log('(1)', data); CreateVideo(data.files); })
    .catch(error => console.log(error));
  };


  // Create The Video With Remotion
  async function CreateVideo(filenames) {
    let videoFiles = {
      files: []
    }

    for (let i = 0; i < filenames.length; i++) {
      videoFiles.files.push(filenames[i].filename);
    }

    console.log(videoFiles);

    return fetch('http://localhost:5000/create-video', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(videoFiles),
    })
    .then(response => response.json())
    .then(data => { console.log('recieved data:', data); setIsLoading(false); setIsDone(true);})
    .catch(error => console.log(error));
  }


  async function DownloadVideo() {
    const downloadUrl = 'http://localhost:5000/download';
  
    const response = await fetch(downloadUrl, { method: 'GET' });
    if (!response.ok) {
      console.error('File download failed');
      return;
    }
  
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'video.mp4');
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    setTimeout(() => {
      Clean();
    }, 2000);
  }

  // Clean The Files
  async function Clean() {
    const formData = new FormData();
    fetch('http://localhost:5000/clean', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => { console.log('recieved data:', data);})
    .catch(error => console.log(error));
  }


  // Run When Page Is Loaded
  useEffect(() => {
    Clean();
    const fetchData = async () => {
      const result = await fetchSomething();
      setData(result.text);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div id="loading">
        <div id="loader"></div>
        <div id="loading-text">This Should Take A Few Minutes</div>
      </div>
    );
  }

  return (
    <div>
      <div id="title">RapidReels</div>
      <div id="welcome">{data}</div>
  
    
      { isDone ? (
        <>
          <div id="done">
            <div id="done-text">Your Video Is Complete!</div>
            <div id="done-text-two">You can download it here.</div>

            <div id="done-buttons">
              <button id="download-button" onClick={DownloadVideo}>Download Here</button>
              <div id="create-another-button"><button onClick={handleCreateAnotherVideo}>Create New Video</button></div>
            </div>
          </div>
        </>
        ) : (
        <>
        <div id="about">
          <div id="about-title">How To Use</div>
          <div id="about-content">
            RapidReels is an intuitive website designed to streamline the video creation process, 
            offering a diverse range of template options inspired by popular platforms like TikTok,
            YouTube shorts, and Instagram reels. With a simple click of a button, users can effortlessly
            select their desired template and create personalized videos within minutes. By seamlessly
            integrating their own videos through a drag-and-drop feature, RapidReels empowers users to
            craft engaging and dynamic advertisements with ease.
          </div>
        </div>

        <div id="video-section">
          <div id="video-title">Create Your Video</div>
          <div id="video-buttons">
            <label htmlFor="add-video-button">Add Video<input type="file" id="add-video-button" multiple onChange={handleVideoInsert} style={{ display: "none" }} /></label>
            <div id="templates">
              <div id="templates-title">Templates</div>
              <button id="pumpitup" onClick={() => handleTemplateChange("pumpitup")}>Pump It Up</button>
              <button id="sking" onClick={() => handleTemplateChange("sking")}>Sking Meme</button>
            </div>
            {/* Option For TikTok Api! */}
            <div id="videos-needed">
              { (num_videos_required[selectedTemplate] - selectedVideos.length === 0) ? (
                <div style={{color: "lightgreen"}}><b>{num_videos_required[selectedTemplate] - selectedVideos.length}</b> More Videos Required</div>
              ) : (
                <div style={{color: "red"}}><b>{num_videos_required[selectedTemplate] - selectedVideos.length}</b> More Videos Required</div>
              )
              }
            </div>
          </div>
          <div id="videos">
            { selectedVideos.length !== 0 ? (
              // Show Videos Selected
              selectedVideos.map((video, index) => (
              <div className='video' key={index}>
                <button className='remove-video' onClick={() => handleRemoveVideo(index)}>X</button>
                <div>{video.name}</div>
              </div>
              ))
              ) : 
              (<div className='video'>No Videos Selected!</div>)
            }
          </div>
        </div>

        {(num_videos_required[selectedTemplate] - selectedVideos.length === 0) ? (
            <div id="create-button"><button onClick={fetchCreateVideo.bind(null, selectedVideos)}>Create!</button></div>
          ) : (
            <div id="create-button"><button style={{backgroundColor:"gray"}}>Create!</button></div>
          )}
      </>)}
    </div>
  );
}

export default App;

