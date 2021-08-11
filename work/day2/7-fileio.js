console.log(process.argv);
// argv 첫번째 - 노드 실행 패스 / 두번째 - 실행파일 패스
// let argv2 = parseInt(process.argv[2]); // 첫번째 파라미터
// let argv3 = parseInt(process.argv[3]); // 그 다음 파라미터

// let res = argv2 + argv3;
// console.log(res);

let sum = 0;

for (let i = 0; i< 5; i++) {
    sum += parseInt(process.argv[i+2]);
}

console.log(sum/5);