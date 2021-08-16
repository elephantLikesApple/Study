import _ from "lodash";

let ip = _.join([127, 0, 0, 1], '.');

console.log(ip);

let ip_arr = _.split(ip, '.');

console.log(ip_arr);