export function arrayFilter() {
  const arr = JSON.parse(process.argv[3]);   
  const condition = process.argv[4];         
  return arr.filter((x) => eval(condition));
}