import _ from 'lodash';

let a = [1, 2, 3];
let b = [4, 5, 6];

//console.log(a+b);

let c = _.concat(a, b, [3, 5, 7, 9], [2, 4, 6, 8]);

console.log(c);