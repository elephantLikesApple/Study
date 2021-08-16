import axios from "axios";

(async function() {
    let res = await axios.get('http://192.168.1.106:8090/echo?title=hello&msg=axios_get_async');

    console.log(res.data);
    console.log(res.status);

})();