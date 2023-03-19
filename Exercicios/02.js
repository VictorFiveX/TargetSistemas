import prompt from 'readline';
import util from 'util';

const rl = prompt.createInterface({ input: process.stdin, output: process.stdout });
const question = util.promisify(rl.question).bind(rl);
const read = (msg) => question(`${msg??''}`);

let fibo0 = 0;
let fibo1 = 1;
let fiboR = 0;
console.log("Sequência de Fibonacci");
console.log("Insira um número: ");
let numImpt = await read();

while (numImpt > fiboR){

    fiboR = fibo0 + fibo1;

    fibo0 = fibo1
    fibo1 = fiboR

} if( numImpt == fiboR){
    
    console.log("O número faz parte da sequência de Fibonacci.");

}else {
    console.log("O número não faz parte da sequência de Fibonacci.");
}
rl.close();