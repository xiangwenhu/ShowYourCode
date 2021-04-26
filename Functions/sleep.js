function sleep(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}

function sleep2(duration) {
    var start = Date.now();

    var now = Date.now();
    while (now - start <= duration) {
        now = Date.now();
    }
}



console.time("sleep");
sleep(1000).then(_ => console.timeEnd("sleep"));


console.time("sleep2");
sleep2(2000);
console.timeEnd("sleep2");