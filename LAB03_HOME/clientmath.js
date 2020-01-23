let net =require('net')
let client =new net.Socket()
const PORT =1354
const HOST ='0.0.0.0'
client.connect(PORT, HOST ,()=>{
    console.log('succesessful')
    client.write('5835512105')
    
})
client.on('data',(data)=>{
    console.log('data from server: ',data.toString())
   // for(let i=0 ; i<5 ;i++)
    //{
    if(data=='OK')
    {
    var answer =Math.floor(Math.random() * 21);
    answer=parseInt(answer)
    console.log(answer)
    client.write(answer.toString())
}
   else if (data =='FLASE')
{
     answer =Math.floor(Math.random() * 21);
    answer=parseInt(answer)
    console.log(answer)
    client.write(answer.toString())
}
else if (data =='BINGO')
{
    console.log('BINGO!')
    client.destroy()
}   
else if (data =='TIME OUT NUMBER')
    client.destroy()

})