const sizeRepeat = Number(process.argv[2]);
let output = '';
for (let i = 1; i <= sizeRepeat; i++) {    
    output += i.toString().repeat(sizeRepeat);
    output += '\n';
}console.log(output);