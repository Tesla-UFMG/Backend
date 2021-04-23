const mongoose = require('mongoose')
const UserTest = mongoose.model('UserTest')
const bcrypt = require('bcrypt-nodejs')
const authService = require('../services/auth-service')
const { notExistsOrError } = require('../validators/validation-crud')

encryptPassword = password => {
    const salt = bcrypt.genSaltSync(10)
    
    return bcrypt.hashSync(password,salt)
}

function compareAsync(param1, param2) {
    return new Promise(function(resolve, reject) {
        bcrypt.compare(param1, param2, function(err, res) {
            if (err) {
                 reject(err);
            } else {
                 resolve(res);
            }
        });
    });
}


exports.authenticate = async(data) => {
    var response = "a"
    const user = await UserTest.findOne({
        email: data.email
    })
    if(!user){
        throw('error: email não encontrado')
    }else{
        const res = await compareAsync(data.password, user.password)
        if(res){
            return user
        }else{
            throw("senhas nao conferem")
        }
    }
}



exports.get = async() => {
    const res = await UserTest.find({})
    return res
}

exports.getById = async(id) => {
    const res = await UserTest.findById(id)
    return res
}

exports.create = async(data) => {
    let check =  await UserTest.findOne({ email: data.email})
    if(check){
        throw("O email já está sendo usado!")
    }else{
        data.password = encryptPassword(data.password)
   
        delete data.confirmPassword
        delete data.confirmEmail
    
        let user = new UserTest(data);
        await user.save()
    }  
}

exports.update = async(id , data) => {
    let check = await UserTest.findOne({_id: id})
    if(check){
        data.password = encryptPassword(data.password)
        await UserTest
        .findOneAndUpdate(id, {
            $set: {
                name: data.name,
                lastName: data.lastName,
                email: data.email,
                password: data.password
            }
        })    
    }else{
        throw("Usuario não encontrado")
    }
    
}

exports.delete = async(id) => {
    console.log("entra aqui")
    const filter = {_id : id}
    const res = await UserTest.findOneAndDelete(filter)
    if(!res){
        throw "Usuario não encontrado"
    }
    console.log(res)
    return res
}