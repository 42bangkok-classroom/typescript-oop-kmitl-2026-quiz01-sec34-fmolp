const size = Number(process.argv[2]);
for (let i = 1; i <= size; i++) {
    if (i%2 === 0) {
        console.log('0'.repeat(size));
    } else {
        console.log('1'.repeat(size));
    }
}
