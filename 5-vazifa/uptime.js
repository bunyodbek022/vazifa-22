import os from "os"
export function upTime(){
    const uptime = (os.uptime())
    console.log(`Uptime : ${uptime} sekund`)
}
upTime()
