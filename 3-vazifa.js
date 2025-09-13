function calculate(a, b, c){
    const son1 = parseInt(a)
    const son2 = parseInt(c)
    switch(b){
        case "+": return son1 + son2
        case "-": return son1 - son2
        case "/": return son1 / son2
        case "*": return son1 * son2
        default: return "Noto'g'ri operator!"
    }
}

const a = process.argv[2]
const b = process.argv[3]
const c = process.argv[4]

console.log(calculate(a, b, c))