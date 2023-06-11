//codded by Tharindu Liyanage from Xnodes
const fs = require('fs');
const ytdl = require('ytdl-core');

const videoUrl = 'https://youtu.be/xwqkMGOmjjE'; // Youtube video link 
const outputFilePath = './Downloads'; 


const writeStream = fs.createWriteStream(outputFilePath);

// Start the download
ytdl(videoUrl, { quality: 'highest' })
  .on('progress', (chunkLength, downloaded, total) => {
    const percent = (downloaded / total) * 100;
    console.log(`Downloading: ${percent.toFixed(2)}%`);
  })
  .on('error', (error) => {
    console.error('An error occurred:', error);
  })
  .pipe(writeStream);


writeStream.on('finish', () => {
  console.log('Download completed successfully!');
});

writeStream.on('error', (error) => {
  console.error('An error occurred while writing the file:', error);
});
