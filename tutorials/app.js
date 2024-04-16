// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const os = require('os')
const user = os.userInfo()

console.log(`The System Uptime is ${os.uptime()} seconds`)
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOS)