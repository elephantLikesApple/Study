import axios from "axios";

axios.get('http://192.168.1.106:8090/echo?title=hello&msg=axios')
.then((res)=> {
    console.log(res.data);
    console.log('status: '+res.status);
})
.catch((err)=>{
    console.log(err);
})