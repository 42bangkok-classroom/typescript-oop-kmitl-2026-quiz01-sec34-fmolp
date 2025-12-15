const light = process.argv[2];
light.toLowerCase
if (light === 'red'){
    console.log('Stop');
}else if (light === 'yellow'){
    console.log('Caution');
}else if (light === 'green'){
    console.log('Go');
}else {
    console.log('Unknown');
}