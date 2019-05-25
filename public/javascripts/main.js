const mariadb = require('mariadb');

class ApiApp {

    constructor() {
    }

    getPool() {
        let pool = mariadb.createPool({
            host: '192.168.1.12', 
            user:'root', 
            password: 'kennethh',
            connectionLimit: 5
        });
        return pool;
    }
    
    async getResult(ticker) {
        let result;
        let pool = this.getPool();
        if (ticker) {
        result = await pool.query("SELECT STOCKID,ticker,country from nhkchan.stocks where ticker = ?", [ticker]);
        }
        else {
        result = await pool.query("SELECT STOCKID,ticker,country from nhkchan.stocks");
        }
        return result;
    }
    
    checkHeader(req) {
        if ( req.headers["security-testing"].toLowerCase() == "yes") {
            return true
        }
        else {
            return false
        }
    }
    
    errorResponse() {
        var errRes = '{"Response Code": "100", "Response Description": "Missing Header"} ';
        errRes = JSON.parse(errRes);
        return errRes;
    }

    ApiResponse() {
        var res = '{"Response Code": "000", "Response Description": "Successful"}';
        return JSON.parse(res);
    }
    
    buildRes(results) {
        let o={}
        o.ApiResponse = results;
        o.ResponseCode = this.ApiResponse();
        return o;
    }

};

module.exports = ApiApp;