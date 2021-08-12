// console.log('step 1'); /// 첫번째
//
// setTimeout(()=>{
//     console.log('step 2'); /// 네번째
//
// },3000);
//
// setTimeout(()=>{
//     console.log('step 3'); /// 세번째
// },1000);
//
// console.log('step 4'); /// 두번째
// *******************숫자가 순서대로 안 나옴*******************



// console.log('step 1'); /// 첫번째
//
// setTimeout(()=>{
//     console.log('step 2'); /// 네번째
//
//     setTimeout(()=>{
//         console.log('step 3'); /// 세번째
//
//         setTimeout(()=>{
//             console.log('step 4'); /// 두번째
//         },500);
//
//     },1000);
//
// },3000);
// *******************숫자가 순서대로 나오지만 조금많이 끔찍함*******************


(new Promise ((resolve)=> {
    console.log('step 2');

    setTimeout(() => {
        resolve()
    }, 3000)
})).then( () => {
    return new Promise((resolve)=> {
        console.log('step 3');
    
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}).then( () => {
    return new Promise((resolve)=> {
        console.log('step 4');
    
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}).then(()=> {
    console.log('step 5');
})