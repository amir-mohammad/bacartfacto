const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (context) =>{
    const authHeader = context.req.headers.authorization
    if(authHeader){
        const token = authHeader.split('Bearer ')[1];
        if(token){
            const useradmin = jwt.verify(token,config.get('secretkey'));
            return useradmin;
        }else{
            throw new Error("token is expire or not valid");
        }
    }else{
        throw new Error('Token is not valid')
    }
}