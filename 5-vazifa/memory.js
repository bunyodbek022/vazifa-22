import os from "os"
export function checkMemory(){
    const memory = (Math.floor(os.freemem()/(1024*1024)))
    console.log(`Free memory : ${memory} MB`)
}
checkMemory()