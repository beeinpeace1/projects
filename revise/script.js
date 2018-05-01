function a() {
    return (b) => {
        console.log('ding dong ' + b);
    }
}
a()(2);