let net =require('net')
let PORT = 6969
let HOST = 'code.werapun.com'
let callback = (sock)=>{
        console.log('Connecting from'+sock.remodeAddress)
    sock.on('data',(data)=>{
        console.log('incoming data' +data)
        sock.write('5835512046')
    })
    sock.on('close',()=>{
        console.log('disconnet')
    })
}
let server =net.createServer(callback)
server.listen(PORT,HOST)
console.log('sever is running at : ' ,PORT)
