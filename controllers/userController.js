const { User } = require('../models/index');
const { compare } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const axios = require('axios')
const {sendEmail} = require('../helpers/nodemailer')

exports.register = async (req, res, next) => {
    try{
        console.log(req.body)
        const registerUser = await User.create(req.body)
        registerUser.password = undefined
        sendEmail(registerUser.email)
        res.status(201).json(registerUser);
    }
    catch(error){
        next(error)
    }
}

exports.login = async(req, res, next) => {
    try {
        let { email, password } = req.body
        let customer = await User.findOne({ where: { email } })
        if (!customer || !compare(password, hashPassword)) return next({ name: 'LOGIN_ERROR' })
        let token = generateToken(customer)
        res.status(200).json(token)

    } catch (err) {
        next(err)
    }
}
//3rd API
exports.getProvinces = (req, res, next) => {
    axios({
        method: 'get',
        url: 'https://dev.farizdotid.com/api/daerahindonesia/provinsi'
    }) 
    .then(({data})=> {
        res.status(200).json(data)
    })
    .catch(({response})=> {
        next(response.data)
    })
}

exports.getCity = (req, res, next) => {
    axios({
        method: 'get',
        url: `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${req.params.provinceId}`
    }) 
    .then(({data})=> {
        res.status(200).json(data)
    })
    .catch(({response})=> {
        next(response.data)
    })
}