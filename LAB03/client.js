let net =require('net')
let client =new net.Socket()
const PORT =6969
const HOST =code.werapun.com
client.connect(PORT, HOST ,()=>{
    console.log('succesessful')
    client.write('hello')

})
client.on('data',(data)=>
{
    console.log('DATA frOM server: ',data.toString())
    client.destroy()
})

