let net =require('net')
let client =new net.Socket()
const PORT =6969
const HOST ='code.werapun.com'
client.connect(PORT, HOST ,()=>{
    console.log('succesessful')
    client.write('5835512105')
    
})
client.on('data',(data)=>{
    console.log('data from server: ',data.toString())
    for(let i=0 ; i<5 ;i++)
    {
    let answer =Math.floor(Math.random() * 21);
    answer=parseInt(answer)
    console.log(answer)
    client.write(answer.toString())
    }
   client.destroy()
})

