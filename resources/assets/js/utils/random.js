export default function generateRandomCharacters() {
  let random = '';
  let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_123467890#';
  for(var i=0; i<16; i++) {
    random+=characters[Math.floor(Math.random() * characters.length)];
  }
  return random;
}