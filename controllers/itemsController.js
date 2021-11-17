const { Item } = require('../models');
const item = require('../models/item');

exports.readFile = async(req, res, next) => {
    try {
        const items = await Item.findAll();
        res.status(200).json(items);
    } catch (error) {
        next(error)
    }
}

exports.createItem = async (req, res, next) => {
    try{
        const { name, description, comment, location } = req.body
        let sampleFile;
        let uploadPath;

        if(!req.files || Object.keys(req.files).length === 0) {
            return next({name: 'NO_IMAGE'})
        }

        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        sampleFile = req.files.imageUrl;
        let imageUrl = `${req.protocol}://${req.get('host')}/images/`
        const item = await Item.create({
            name, 
            description, 
            comment, 
            location,
            imageUrl
        })
        imageUrl = item.imageUrl+item.id+'.'+sampleFile.mimetype.split('/')[1]
        await Item.update({imageUrl}, {where: {id:item.id}})
        // Use the mv() method to place the file somewhere on your server
        uploadPath = process.cwd()+'/public/images/'+item.id+'.'+sampleFile.mimetype.split('/')[1]
        await sampleFile.mv(uploadPath);
        item.imageUrl = imageUrl
        res.status(201).json(item)
    }catch(err) {
        next(err)
    }
}

exports.readById = async(req, res, next) => {
    try {
        const item = await Item.findByPk(req.params.id)
        if (!item) return next({ name: 'NOT_FOUND' })
        res.status(200).json(item);
    } catch (error) {
        next(error)
    }
}

exports.deleteItem = async(req, res, next) => {
    try {
        const item = await Item.findByPk(req.params.id)
        if (!item) return next({ name: 'NOT_FOUND' })
        await Item.destroy({ where: { id: req.params.id } })
        res.status(200).json({ message: 'movie deleted' });
    } catch (error) {
        next(error)
    }
}


exports.updateItem = async (req, res, next) => {
    try{
        const { name, description, comment, location } = req.body
        let item = await Item.findByPk(req.params.id)
        if(!item) return next({name: 'NOT_FOUND'})
        
        if(req.files && Object.keys(req.files).length !== 0) {
            let sampleFile;
            let uploadPath;
            sampleFile = req.files.imageUrl;
            uploadPath = process.cwd()+'/public/images/'+item.id+'.'+sampleFile.mimetype.split('/')[1]
            await sampleFile.mv(uploadPath);
        }
        await Item.update({
            name, 
            description, 
            comment, 
            location,
        }, {where: {id:req.params.id}})

        res.status(200).json({message: 'update successfully'})
    }catch(err) {
        next(err)
    }
}