export function arraySort(){
   return JSON.parse(process.argv[3]).sort((a, b) => a-b)
}