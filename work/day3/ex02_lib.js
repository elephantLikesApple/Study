function important() {
    console.log('hi');
}
function imptnt() {
    console.log('es6');
}

var goodData = 7;

function foo() {
    return {
        data : goodData,
        foo1 : important,
        foo2 : imptnt
        // 함수를 가리키는 오브젝트를 넘겨주어 다른 파일에서 이 페이지의 모든 함수를 사용할 수 있음
    }
}

export default foo; // 객체를 함수로 봄 : 프로토타입형 객체지향 언어