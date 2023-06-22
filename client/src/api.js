
export const fetchSomething = async () => {
    return fetch('http://localhost:5000')
    .then(response => response.json())
    .then(data => { console.log('recieved data:', data); return data; })
    .catch(error => console.log(error));
};

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
    .then(data => console.log('recieved data:', data))
    .catch(error => console.log(error));
}

//npx remotion render <entry-file> [<composition-id>] [<output-location>]
export const fetchCreateVideo = async (videos) => {
    /* NEED TO CATCH ERRORS HERE!! */
    
    if (videos.length !== 3) {
        console.log("Too many or not enough videos")
        return
    }

    // Data (Videos)
    const formData = new FormData();  // Create a new FormData object

    for (let i = 0; i < videos.length; i++) {
        formData.append('videos', videos[i]);  // Append each video file to the FormData object
    }


    console.log(formData.get('videos'));

    // Upload Videos To Server
    fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => { console.log('recieved data:', data); CreateVideo(data.files); })
    .catch(error => console.log(error));
};
