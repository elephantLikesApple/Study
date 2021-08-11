function important() {
    console.log('hi');
}
function imptnt() {
    console.log('es6');
}

function foo() {
    return {
        foo1 : important,
        foo2 : imptnt
    }
}

// common.js 형식 (require를 쓰는 형식), package.json에서 type을 module이 아니라 commonjs로..
module.exports = foo;