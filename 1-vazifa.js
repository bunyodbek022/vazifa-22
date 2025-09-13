class CaesarCipher{
    constructor(shift){
             this.shift = shift
    }

    encode(matn){
        return matn.split("").map((harf)=>{
            if(/[a-zA-z]/.test(String.fromCharCode((harf.charCodeAt(0)+this.shift)))){
                return String.fromCharCode((harf.charCodeAt(0)+this.shift))
            }else{
                return String.fromCharCode(((harf.charCodeAt(0)+this.shift)-26))
            }
        }).join("")
    }
    decode(matn){
        return matn.split("").map((harf)=>{
            if(/[a-zA-Z]/.test(String.fromCharCode((harf.charCodeAt(0)-this.shift)))){
                return String.fromCharCode((harf.charCodeAt(0)-this.shift))
            }else{
                return String.fromCharCode(((harf.charCodeAt(0)-this.shift)+26))
            }
        }).join("")
    }
}
const shift = process.argv[2] // Sonni ixtiyoriy o'zimiz kirita olamiz
if(shift>=1 && shift<=26){
    let c = new CaesarCipher(shift)
    console.log(c.decode("BFKKQJX"))
}
