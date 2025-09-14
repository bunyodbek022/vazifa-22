// import * as obj from "./Converter/index.js";

// const arg = process.argv[2];
// if (!arg) {
//     console.log("Iltimos, JSON argument yuboring");
//     process.exit(1);
// }

// try {
//     const data = JSON.parse(arg);

//     if (typeof data === "object" && data !== null && !Array.isArray(data)) {
//         console.log(obj.toArray(data));
//     }

//     if (Array.isArray(data)) {
//         console.log(obj.toObject(data));
//     }
//     if (typeof arg == "string") {
//         console.log(obj.toBoolean(arg));
//     }

// } catch (err) {
//     console.error("JSON parse xatosi:", err.message);
// }
// 7-vazifa

import * as obj1 from "./7-vazifa/stringOperations/index.js";
import * as obj2 from  "./7-vazifa/dataOperations/index.js";

if(process.argv[2] == "lowercase"){
    console.log(obj1.tolower())
}
if(process.argv[2] == "uppercase"){
    console.log(obj1.toupper())
}
if(process.argv[2] == "ASCII"){
    console.log(obj1.convertToASCII())
}
if(process.argv[2] == "filter"){
    console.log(obj2.arrayFilter())
}
if(process.argv[2] == "sort"){
    console.log(obj2.arraySort())
}