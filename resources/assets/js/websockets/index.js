const ws = require('adonis-websocket-client')
const io = ws('http://localhost:3333/adonis-ws', {})

const client = io.channel('chat');

client.connect((error, connected) => {
  if (error) {
    return;
  }
  console.log('connected');
  
  client.on('message', (message) => {
    console.log(message)
  })
});

module.exports = client;
