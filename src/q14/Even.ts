const num = Number(process.argv[2]);
for (let i=0; i<=num; i++){
    if (i%2 !==0){ 
        continue;
    }
    console.log(i.toString());
}