const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'profile-photo.jpg.bak');
const outputPath = path.join(__dirname, 'public', 'profile-photo.jpg');

sharp(inputPath)
    .resize(800, 800, {
        fit: 'cover',
        position: 'center'
    })
    .jpeg({
        quality: 80,
        progressive: true
    })
    .toFile(outputPath)
    .then(() => {
        console.log('Image optimized successfully!');
    })
    .catch(err => {
        console.error('Error optimizing image:', err);
    }); 