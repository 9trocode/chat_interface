export function getHostname () {
  return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'localhost:3333' : window.location.hostname
}

export function getSocketProtocol () {
  return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'ws://' : 'wss://'
}
