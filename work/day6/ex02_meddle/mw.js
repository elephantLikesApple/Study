const logger = (req, res, next) => {
    console.log(req.method, req.url, (new Date()).toISOString());
    next();
}

const autholize = (req, res, next) => {
    if(req.query.apikey == 'qwer') {
        next()
    }
    else {
        res.send('<h1>로그인이 필요한 서비스입니다.</h1>');
    }
}

const testmw_1 = (req, res, next) => {
    console.log('check test 1');
    next();
}

const testmw_2 = (req, res, next) => {
    console.log('check test 2');
    next();
}

export {logger, autholize, testmw_1, testmw_2}