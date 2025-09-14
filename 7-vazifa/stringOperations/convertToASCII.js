export function convertToASCII(){
   return process.argv[3].split("").map(harf => {
        return harf.charCodeAt(0)
   }).join("");
}