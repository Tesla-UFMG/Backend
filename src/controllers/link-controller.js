const repository = require('../repositories/link-repository')
const contract = require('../validators/validation-crud')

exports.get = async(req,res) => {
    try{
        let data = await repository.get()
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar requisição'
        })
    }
}

exports.getById = async(req,res) => {
    try{
        let data = await repository.getById(req.params.id)
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar requisição'
        })
    }
}

exports.post = async(req,res,next) => {   

  const link = {...req.body}

  try{
      contract.existsOrError(link.name, 'O campo nome é requerido!')
      contract.existsOrError(link.url, 'O campo url é requerido!')

      
      await repository.create(req.body)
     
      res.status(201).send({
          message: 'Link com sucesso!'
      })
  } catch(e) {
      res.status(500).send({
          message: e
      })
  }
}

exports.put = async(req,res,next) => {

  const link = {...req.body}
  
  try{
    contract.existsOrError(link.name, 'O campo nome é requerido!')
    contract.existsOrError(link.url, 'O campo url é requerido!')
      await repository.update(req.params.id,req.body)
          res.status(200).send({
              message: 'Link atualizado com sucesso!'
          })
  } catch(e){
      res.status(500).send({
          message: e
      })
  }
}   

exports.delete = async(req,res,next) => {
  try{
      await repository.delete(req.params.id)
      res.status(200).send({
          message: 'link removido com sucesso!'
      })
  } catch(e) {
      res.status(500).send({
          message: e
      })
  }
}