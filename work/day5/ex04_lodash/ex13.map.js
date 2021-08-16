import _ from 'lodash'

let out = _.map([1,2,3,4,], (o) => {
    console.log(o)
    return o*o;
})

console.log(out);


// SQL의 select문 역할을 하는 map
var users = [
    {'users':'a', age:10 },
    {'users':'b', age:20 },
]

let _users = _.map(users, 'age');

console.log(_users);