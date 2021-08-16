import {flatten, flattenDeep} from 'lodash-es';

console.log(flatten([1, 2, [3, 4, [5, 0]], [6]])); // 한겹만 벗겨짐
console.log(flattenDeep([1, 2, [3, 4, [5, 0]], [6]])); // 몇 겹이든 벗겨짐