const input = process.argv.slice(2).map(Number);
const largest = Math.max(...input);
console.log(largest);