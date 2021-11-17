const { register, login, getProvinces, getCity } = require('../controllers/userController')
const router = require('express').Router()

router.post('/register', register)
router.post('/login', login)
router.get('/register/province', getProvinces)
router.get('/register/city/:provinceId', getCity )


module.exports = router