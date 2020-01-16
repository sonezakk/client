let net =require('net')
let client =new net.Socket()
const PORT =5555
const HOST ='localhost'
client.connect(PORT, HOST ,()=>{
    console.log('succesessful')
    client.write('hello')

})
client.on('data',(data)=>
{
    console.log('DATA frOM server: ',data.toString())
    client.destroy()
})

