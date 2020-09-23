let input = process.argv.slice(2).sort();
input = input.filter(num => num > 0);

console.log(input)
const timer = function (){
  


  for(let i = 0; i < input.length; i++) {
     
    setTimeout(() => { process.stdout.write('\x07')}, input[i]*1000)
  }
}

timer();