const NewTeacher = require('../../models/NewTeacher');
const checkAuth = require('../../utls/checkAuth');

module.exports = {
    Query:{
        async getAllTeachers(){
            try {
                const teachers = await NewTeacher.find();
                return teachers;
            } catch (error) {
                throw new Error("Internal Server Error" + error);
            }
        }
    },
    Mutation:{
        async registerTeacher(_,{name,mobile,nationCode,bio,pic},context){
                const auth = checkAuth(context);
                try {
                    const teacher = await NewTeacher.findOne({mobile});
                    if(teacher){
                        throw new Error("Teacher already exist");
                    }

                    const teacherNew = new  NewTeacher({
                        name,
                        mobile,
                        nationCode,
                        bio,
                        pic
                    });

                    const teacherSave = await teacherNew.save();
                    return{
                        ...teacherSave._doc,
                        id:teacherSave.id
                    }
                } catch (error) {
                    throw new Error("Internal server Error" + error);
                }
        }
    }
}