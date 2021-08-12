import fetch from 'node-fetch';

/*
fetch('http://localhost:8090/echo?msg=node-fetch&title=Hello')
.then((res) => {
    //console.log(res);
    return res.json();
})
.then((jsonObj) => {
    console.log(jsonObj);
})
*/

(async function() {
    let res = await (await fetch('http://localhost:8090/echo?msg=node-fetch&title=Hello')).json();
    console.log(res);
})();