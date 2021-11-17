const { readFile, createItem, readById, updateItem, deleteItem } = require('../controllers/itemsController')
const router = require('express').Router()

// => /items
router.get('/', readFile )
router.post('/', createItem )
router.get('/:id', readById )
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

module.exports = router