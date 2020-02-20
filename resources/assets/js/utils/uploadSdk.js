
import path from 'path';
const generateRandomCharacters = require('./random.js');

class FileUploadSDK {
  async upload({request}) {
    const image = request.file('message_image', {
      types: ['image'],
      size: '2mb',
      extnames: ['png', 'gif', 'mp4', 'mp3']
    })
    console.log(image)

    const RANDOM = generateRandomCharacters();
    let subtype = ''
    await image.move(path.join(__dirname,'public/uploads'), (file) => {
      subtype = file.subtype;
      return {
        name: `IMG_${RANDOM}.${subtype}`
      }
    })
    if (!image.moved()) {
      return image.error()
    }
    return `IMG_${RANDOM}.${subtype}`
  }

}

class uploadSDK {
  upload(data) {
    if (true) {
      return new FileUploadSDK().upload(data);
    }
  }
}

export default new uploadSDK();