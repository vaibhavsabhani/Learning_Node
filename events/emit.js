const emitter = require('events');

const instanceEmitter = new emitter();


instanceEmitter.on('messageLogged', (arg) => {
    console.log('Listener called', `helly this my id : ${arg.id}, and this is my url ${arg.url}`);
})

instanceEmitter.emit('messageLogged', { id: 1, url: 'http://myurl.com' });