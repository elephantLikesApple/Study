import {drop,dropRight,dropWhile} from 'lodash-es'

console.log(drop([1,2,3,4,5,6],2))
console.log(drop(drop([1,2,3,4,5,6])))

console.log(dropRight([1,2,3,4,5,6]))

// 이거랑
console.log(dropWhile([1,2,3,4,5,6], (o) => {
    return o<3;
}))

// 이거랑 같은 거
console.log(dropWhile([1,2,3,4,5,6], o => o<3))
