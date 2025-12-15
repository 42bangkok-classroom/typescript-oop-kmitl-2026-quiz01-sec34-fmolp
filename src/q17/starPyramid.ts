const pyramid = Number(process.argv[2]);
for (let i = 1; i <= pyramid; i++) {
    console.log('*'.repeat(i));
}