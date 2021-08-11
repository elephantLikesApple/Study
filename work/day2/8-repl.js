import repl from 'repl';

let repl_context = repl.start(
    {
        prompt : '>',
        input : process.stdin,
        output : process.stdout
    }
).contexts;

// 어떤 함수를 타이밍 맞춰서 디버깅 해야될 때 사용

function foo() { // 타이밍이 아주 중요한 함수
    console.log('Hello World!');
}
repl_context.foo = foo;