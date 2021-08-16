import  _ from 'lodash'

var obj =  [{'a':1}, {'b':2}];

console.log('--------- ===')
let _obj = obj;
console.log(_obj === obj);

console.log('----------clone');
let obj2 = _.clone(obj);
console.log(obj === obj2);
console.log(obj[0] === obj2[0]);

console.log('----------deep clone');
let obj3 = _.cloneDeep(obj);
console.log(obj === obj3);
console.log(obj[0] === obj3[0]);