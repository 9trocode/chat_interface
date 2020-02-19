export function getHostname () {
  return window.location.hostname === 'localhost' ? 'localhost:3333' : window.location.hostname
}

export function getSocketProtocol () {
  return window.location.hostname === 'localhost' ? 'ws://' : 'wss://'
}
