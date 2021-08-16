import axios from "axios";

// axios.post('http://192.168.1.106:8090/echo')
axios({
    method: 'POST',
    url: 'http://192.168.1.106:8090/echo',
    data: 'axios post request',
    headers: {
        'my-custom-header': 'hi'
    }
}).then((res) =>{
    //console.log(res);
    console.log(res.headers);
    console.log(res.data);
}).catch(err=>{
    //console.log(err);
    console.log(err.errno);
    console.log(err.code);
})