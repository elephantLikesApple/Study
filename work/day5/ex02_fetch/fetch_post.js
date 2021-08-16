import fetch from "node-fetch";

(async function() {
    let res = await (await fetch('http://192.168.1.106:8090/echo',
    {
        method: 'POST',
        body: 'hello post',
        headers: {
            'my-custom-header': 'hi'
        }
    })).json();

    console.log(res);

})();