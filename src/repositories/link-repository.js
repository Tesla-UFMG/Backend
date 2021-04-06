const mongoose = require('mongoose')
const Link = mongoose.model('Link')


exports.get = async() => {
    const res = await Link.find({})
    return res
}

exports.getById = async(id) => {
    const res = await Link.findById(id)
    return res
}

exports.create = async(data) => {
    let check =  await Link.findOne({ name: data.name})
    if(check){
        throw("jogo ja existe")
    }else{
        let link = new Link(data);
        await link.save()
    }  
}

exports.update = async(id , data) => {
    let check = await Link.findOne({_id: id})
    if(check){

        await Link
        .findOneAndUpdate(id, {
            $set: {
                name: data.name,
                url: data.url,
                active: data.active,
            }
        })    
    }else{
        throw("Link não encontrado")
    }
    
}

exports.delete = async(id) => {
    const filter = {_id : id}
    const res = await Link.findOneAndDelete(filter)
    if(!res){
        throw "Link não encontrado"
    }
    return res
}