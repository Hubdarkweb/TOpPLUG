//base by 🗽🥷☣️🏴‍☠️🕷️🗽 TOpPLUG 🗽 
//re-upload? recode? copy code? give credit ya :)
//YouTube: @cyberpunk.joker
//Instagram: lenin.l.k
//Telegram: https://t.me/+Q-qFB7mK3MZjOTU0
//GitHub: @Hubdarkweb
//WhatsApp: +254112386921
//want more free bot scripts? subscribe to my telegram channel: https://t.me/Hub7s

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
