function loop(times = 0, callback = null) {

    if (callback === null) return;

    for (let i = 0; i < times; i++) {
        callback();
    }
}

function callback() {
    console.log('Hello, World');
}

loop(5, callback);