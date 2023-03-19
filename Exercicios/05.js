import prompt from 'readline';
import util from 'util';

const rl = prompt.createInterface({ input: process.stdin, output: process.stdout });
const question = util.promisify(rl.question).bind(rl);
const read = (msg) => question(`${msg??''}`);

    console.log('digite um texto:'); 
    let text = await read();

    let revString = "";
    for (let i = text.length - 1; i >= 0; i--) {
        revString += text[i];
    }
    console.log(revString);


rl.close();