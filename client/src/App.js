import './App.css';
import React, { useEffect, useState } from 'react';
import { MASTER_SWITCH } from './masterswitch';


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

  const num_videos_required = {"pumpitup": 3, "sking": 5}; // Add More To Here!

  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');

  const [selectedTheme, setSelectedTheme] = useState('dealdog');


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

  
  // Handle The Theme Changing
  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
    setColor1(MASTER_SWITCH[event.target.value]['info']['primary_color']);
    setColor2(MASTER_SWITCH[event.target.value]['info']['secondary_color']);
  };


  // Handle Create Video
  const fetchCreateVideo = async (videos) => {
    if (selectedTheme === "") {
      alert("Select A Theme!");
    }
    setIsLoading(true);

    console.log(color1);
    console.log(color2);

    // Change Colors
    try {
      const response = await fetch('http://localhost:5000/colors', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ color1, color2 }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      console.error(error.message);
    }

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
            <div id="about-title">About</div>
            <div id="about-content">
              RapidReels is an intuitive website designed to streamline the video creation process, 
              offering a diverse range of template options inspired by popular platforms like TikTok,
              YouTube shorts, and Instagram reels. With a simple click of a button, users can effortlessly
              select their desired template and create personalized videos within minutes. RapidReels empowers users to
              craft engaging and dynamic advertisements with ease. There are four simple steps:
              <b> ( 1 )</b> Choose A Theme
              <b> ( 2 )</b> Choose A Template
              <b> ( 3 )</b> Add Your Clips
              <b> ( 4 )</b> Create Your Video
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
            <select id="theme" value={selectedTheme} onChange={handleThemeChange}>
              <option value="">Select Theme</option>
              <option value="@vcu.edu">VCU</option>
              <option value="@umich.edu">UMich</option>
              <option value="@iu.edu">IU</option>
              <option value="@umd.edu">UMD</option>
              <option value="@msu.edu">MSU</option>
              <option value="@rutgers.edu">Rutgers</option>
              <option value="@illinois.edu">UI</option>
              <option value="@uiowa.edu">UIowa</option>
              <option value="@umn.edu">UMinn</option>
              <option value="@unl.edu">UNL</option>
              <option value="@purdue.edu">Purdue</option>
              <option value="@wisc.edu">UWM</option>
              <option value="@auburn.edu">AU</option>
              <option value="@lsu.edu">LSU</option>
              <option value="@msstate.edu">UMiss</option>
              <option value="@tamu.edu">A&M</option>
              <option value="@ua.edu">Bama</option>
              <option value="@uark.edu">Uark</option>
              <option value="@uga.edu">UGA</option>
              <option value="@olemiss.edu">Ole Miss</option>
              <option value="@vanderbilt.edu">Vandy</option>
              <option value="@usc.edu">USC</option>
              <option value="@ucla.edu">UCLA</option>
              <option value="@stanford.edu">Stanford</option>
              <option value="@uw.edu">UW</option>
              <option value="@berkeley.edu">UCB</option>
              <option value="@wsu.edu">WSU</option>
              <option value="@arizona.edu">AU</option>
              <option value="@Colorado.edu">Colorado</option>
              <option value="@oregonstate.edu">OSU</option>
              <option value="@bc.edu">BC</option>
              <option value="@duke.edu">Duke</option>
              <option value="@fsu.edu">FSU</option>
              <option value="@gatech.edu">Gatech</option>
              <option value="@miami.edu">Maimi</option>
              <option value="@unc.edu">UNC</option>
              <option value="@ncsu.edu">NSCU</option>
              <option value="@nd.edu">UDU</option>
              <option value="@pitt.edu">Pitt</option>
              <option value="@virginia.edu">VU</option>
              <option value="@vt.edu">VTU</option>
              <option value="@wfu.edu">WFU</option>
            </select>
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

