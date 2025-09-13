import * as obj from "./index.js"
const arg = process.argv[2]; 
if (!arg) {
    console.log("Iltimos, JSON argument yuboring");
    process.exit(1);
}
try{
    if((typeof JSON.parse(arg) && !Array.isArray(JSON.parse(arg))) == "object"){
    console.log(obj.toArray(JSON.parse(arg)))
    }
    if(Array.isArray(JSON.parse(arg))){
        console.log(obj.toObject(JSON.parse(arg)))
    }
    if((typeof JSON.parse(arg)) == "string"){
        console.log(obj.toBolean(JSON.parse(arg)))
    }
}
catch (err) {
    console.error("JSON parse xatosi:", err.message);
}