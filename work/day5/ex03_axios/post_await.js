import axios from "axios";

(async function() {
    try{
        let res = await axios({
            method: 'POST',
            url: 'http://192.168.1.106:8090/echo',
            data: 'axios post request',
            headers: {
                'my-custom-header': 'hi'
            }
        })
        console.log(res.status);
        console.log(res.data);
    }
    catch(err) {
        console.log(err.code);
    }
})();