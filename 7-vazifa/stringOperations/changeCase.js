export function tolower(){
   return process.argv[3].split("").map(harf => {
        if(harf !== harf.toLowerCase()){
            return harf.toLowerCase()
        }
   }).join("");
}
export function toupper(){
   return process.argv[3].split("").map(harf => {
        if(harf !== harf.toUpperCase()){
            return harf.toUpperCase()
        }
   }).join("");
}