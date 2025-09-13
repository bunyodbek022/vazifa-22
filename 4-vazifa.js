function checkMemory(){
    const os = require("os")
    const memory = (Math.floor(os.freemem()/(1024*1024)))
    console.log(`Free memory : ${memory} MB`)
}
if(process.argv[2]== "check-memory"){
    checkMemory()
}