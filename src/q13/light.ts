const light = process.argv[2];
const check = light.toLowerCase();
if (check === 'red'){
    console.log('Stop');
}else if (check === 'yellow'){
    console.log('Caution');
}else if (check === 'green'){
    console.log('Go');
}else {
    console.log('Unknown');
}