const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuration For Uploads
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname);
  }
});

const upload = multer({ storage: fileStorageEngine });

// Setting Port
const PORT = process.env.PORT || 5000;

// Sanity Check API Call
app.get('/', (req, res) => {
  res.send({ text: 'Hello World!'});
});


// Upload Videos API Call
app.post('/upload', upload.array('videos'), (req, res) => {
    console.log(req.files);
    res.send({ status: 'Videos Uploaded Successfully', files: req.files });
});


// Process & Create Remotion Video API Call
app.post('/create-video', (req, res) => {
    console.log(req.body.files);
    const filenames = req.body.files

    exec(`bash bin/script.sh ${filenames.join(' ')}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing script: ${error}`);
        res.status(500).send('An error occurred while executing the script.');
        return;
      }
      
      console.log(`Script output: ${stdout}`);

      res.send({ status: 'Remotion Video Successfully Rendered'});
  });
});

// Upload Videos API Call
app.post('/clean', (req, res) => {
  exec(`bash bin/clean.sh`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error}`);
      res.status(500).send('An error occurred while executing the script.');
      return;
    }
    
    console.log(`Script output: ${stdout}`);

    res.send({ status: 'Successfully Cleaned Folders'});
  });
});


// Listening Port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});