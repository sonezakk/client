let net =require('net')
let PORT = 5555
let HOST = '0.0.0.0'
let callback = (sock)=>{
        console.log('Connecting from'+sock.remodeAddress)
    sock.on('data',(data)=>{
        console.log('incoming data' +data)
        sock.write('hello')
    })
    sock.on('close',()=>{
        console.log('disconnet')
    })
}
let server =net.createServer(callback)
server.listen(PORT,HOST)
console.log('sever is running at : ' ,PORT)
