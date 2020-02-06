const {gql} = require("apollo-server-express");

const typeDefes = gql`
type Access{
    dashboard:Boolean
    admin:Boolean
        teacher:Boolean
        departemant:Boolean
        course:Boolean
        student:Boolean
        webSetting:Boolean
        gallery:Boolean
        offerCode:Boolean
}
input InputAccess{
    dashboard:Boolean
    admin:Boolean
        teacher:Boolean
        departemant:Boolean
        course:Boolean
        student:Boolean
        webSetting:Boolean
        gallery:Boolean
        offerCode:Boolean
}
    type UserAdmin{
        id:ID!
        name:String!
        mobile:String!
        password:String,
        active:Boolean!,
        access:Access!,
        token:String!
    }

    type Teacher{
        id:ID!
        name:String!
        mobile:String!
        nationCode:String!
        bio:String!
        pic:String!,
        
        
    }

    type Query{
        getAllUserAdmin:[UserAdmin]
        getAllTeachers:[Teacher]!
      
    }
    type Mutation{
        registerUserAdmin(name:String!,mobile:String!,password:String!,confirmPassword:String!,access:InputAccess,active:Boolean):UserAdmin!

        loginUserAdmin(mobile:String!,password:String!):UserAdmin!


        registerTeacher(name:String!,mobile:String!,nationCode:String!,bio:String,pic:String):Teacher!
    }
`;


module.exports = typeDefes;
