import pkg from 'lodash';
const {findIndex} = pkg;
//console.log(_.VERSION);

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

  let _findIndex = pkg.findIndex(users, (o)=> {
      return o.user == 'fred'
  });

  console.log(_findIndex);
