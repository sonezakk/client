let net =require('net')
let PORT = 1354
let HOST = '0.0.0.0'
var i=0
let callback = (sock)=>{
        console.log('Connecting from'+sock.remoteAddress)
    sock.on('data',(data)=>{
    
        //console.log('User number : '+ ''+sock.remoteAddress +' data : ' +data);
      if(data && data.toString().length ==10)
      {
      console.log('User number : '+ ''+sock.remoteAddress +' data : ' +data);
       sock.write('OK');
      }
      else if(data && data.toString() != '7')
      {
      console.log('data number  : ' + data)
       sock.write('FLASE');
        }
       else if(data && data.toString() == '7')        
       sock.write('BINGO')
       if(i ==10)
       {
           sock.write('TIME OUT NUMBER ')
           i=0
       }
       i++
    })
    sock.on('close',(data)=>{
        console.log('disconnet' +' ' + sock.remoteAddress)
    })
}
let server =net.createServer(callback)
server.listen(PORT,HOST)
console.log('sever is running at : ' ,PORT)