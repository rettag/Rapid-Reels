const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

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
  res.send({ text: 'Welcome!'});
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


// Download Video API Call
app.get('/download', (req, res) => {
  console.log('Downloading Video')
  const videoPath = path.join(__dirname, 'client/src/out/video.mp4');
  console.log(videoPath);
  res.sendFile(videoPath, (error) => {
    if (error) {
      console.error(error);
      res.status(500).send('An error occurred during the file download.');
    }
  });
});


// Function to convert RGB color to hexadecimal format
function rgbToHex(color) {
  const rgbValues = color.substring(color.indexOf('(') + 1, color.lastIndexOf(')')).split(',');
  const r = parseInt(rgbValues[0].trim(), 10).toString(16).padStart(2, '0');
  const g = parseInt(rgbValues[1].trim(), 10).toString(16).padStart(2, '0');
  const b = parseInt(rgbValues[2].trim(), 10).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
}


// Change Colors For Video
app.put('/colors', (req, res) => {
  // Read the Colors.ts file
  fs.readFile('./remotion/public/Colors.ts', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read Colors.ts' });
    }

    console.log(req.body.color2);
    console.log(req.body.color1);

    try {
      // Replace the color1 and color2 values in the Colors.ts file
      const color1Hex = rgbToHex(req.body.color1);
      const color2Hex = rgbToHex(req.body.color2);

      // Replace the color1 and color2 values in the Colors.ts file
      const updatedData = data.replace(
        /color1:\s+'#[^']+'/,
        `color1: '${color1Hex}'`
      ).replace(
        /color2:\s+'#[^']+'/,
        `color2: '${color2Hex}'`
      );

      fs.writeFile('./remotion/public/Colors.ts', updatedData, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to write Colors.ts' });
        }

        return res.status(200).json({ message: 'Colors updated successfully' });
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to modify Colors.ts' });
    }
  });
});


// Listening Port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});