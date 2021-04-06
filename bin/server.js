const app = require('../src/app')
const http = require('http')
const debug = require('debug')('nodestr:server')

const port = normalizePort(process.env.PORT || '3001')
app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
console.log('API rodando na porta  = ' + port)

//Seta outra porta caso 3001 esteja ocupada
function normalizePort(val) {
    const port = parseInt(val,10)

    if(isNaN(port)){
        return val
    }

    if(port >= 0){
        return port
    }

    return false
}

//Printa no console o tipo de error do servidor
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe' + port :
        'Port' + port

    switch(error.code) {
        case 'EACCES':
            console.error(bind + 'riquires elevated privileges')
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(bind + 'is already in use')
            process.exit(1)
            break
        default:
            throw error
    }
}

//Inicia o debug
function onListening() {
    const addr = server.address()
    const bind = typeof addr === 'string'
        ? 'pipe' + addr
        : 'port' + addr.port
    debug('Lintening on ' + bind)
}
