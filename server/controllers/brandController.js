const {Brand, Type} = require('../models/models')
const ApiError = require('../error/ApiError')
class BrandController{
    async create(req,res){
        const {name} = req.body
        try
        {
            const brand = await Brand.create({name})
            return res.json(brand)}
        catch (error)
        {
            if (error.name === 'SequelizeUniqueConstraintError') {
                return res.status(400).json({ error: 'Already exists.' });
            } 
        }
    }

    async getAll(req,res){
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async delete(req, res) {
        const { id } = req.params;
        const brand = await Brand.findByPk(id);
        if (!brand) {
            return res.status(404).json({ message: "Brand not found" });
        }
        await brand.destroy();
        return res.status(204).json({ message: "Brand deleted successfully" });
    }
}

module.exports = new BrandController()