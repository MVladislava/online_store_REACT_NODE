const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')
class TypeController{
    async create(req,res){
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req,res){
        const types = await Type.findAll()
        return res.json(types)
    }

    async delete(req, res) {
        const { id } = req.params;
        const type = await Type.findByPk(id);
        if (!type) {
            return res.status(404).json({ message: "Type not found" });
        }
        await type.destroy();
        return res.status(204).json({ message: "Type deleted successfully" });
    }
}

module.exports = new TypeController()