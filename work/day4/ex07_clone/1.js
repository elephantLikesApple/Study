let obja = {
    a: 1,
    b: 2,
    k: [12, 3,4,5]
}

// 얇은 복사
let objb = obja; // 주소를 복사해놓음(objb는 obja의 별명)

// 깊은 복사 (clonning 완전복사)
let objc = JSON.parse(JSON.stringify(obja)); // objc에 obja를 복사

console.log(obja === objb);
console.log(obja === objc);

console.log(objb.a);
obja.a=3;

console.log(objb.a)
console.log(objc.a)

