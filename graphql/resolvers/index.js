const newUserAdminResolvers = require('./newUserAdminResolvers');
const newTeacherReasolvers = require('./newTeachersResolver');

module.exports = {
    Query:{
            ...newTeacherReasolvers.Query
    },

    Mutation:{
        ...newUserAdminResolvers.Mutation,
        ...newTeacherReasolvers.Mutation
    }

}