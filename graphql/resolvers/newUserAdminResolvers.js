const NewUserAdmin = require('../../models/NewUserAdmin');
const bcryptJs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const checkAuth = require('../../utls/checkAuth');
const {UserInputError} = require('apollo-server-express')


module.exports = {
    Mutation:{
        async registerUserAdmin(_,{name,mobile,password,confirmPassword,access,active},context){
            const auth = checkAuth(context);
            try {
                let userAdmin = await NewUserAdmin.findOne({mobile});
                
                if(userAdmin){
                    throw new Error("Admin Already Exist");
                }

               const  userAdminnew = new NewUserAdmin({
                    mobile,
                    name,
                    password,
                    access,
                    active
                });

                const salt = await bcryptJs.genSalt(10);
                const hashPassword = await bcryptJs.hash(password,salt);

                userAdminnew.password = hashPassword;

                const savedAdmin = await userAdminnew.save();

                const token = jwt.sign({id:savedAdmin.id,mobile:savedAdmin.mobile,name:savedAdmin.name},config.get("secretkey"),{
                    expiresIn:"1h"
                });

                return {
                    ...savedAdmin._doc,
                    id:savedAdmin.id,
                    token
                }



            } catch (error) {
                throw new Error("Internal server Error" + error);
            }
        },

        async loginUserAdmin(_,{mobile,password},context){
            try {
                const Admin = await NewUserAdmin.findOne({mobile});
                if(!Admin){
                    throw new Error("User Admin does not exist");
                }

                const match = await bcryptJs.compare(password,Admin.password);
                if(!match){
                    throw new Error("Password is not correct");
                }

                const token = jwt.sign({id:Admin.id,mobile:Admin.mobile,name:Admin.name,active:Admin.active,access:Admin.access},config.get("secretkey"),{
                    expiresIn:"1h"
                });

                return{
                    ...Admin._doc,
                    id:Admin.id,
                    token
                }
            } catch (error) {
                throw new Error("internal server error" + error);
            }
        }
    }
}