if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const {errorHandler} = require('./middlewares/errorHandler')
const express = require('express')
const fileUpload = require('express-fileupload');
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/index')
const cors = require('cors')

app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded ({extended : false, limit: '50mb'}))
app.use(fileUpload())
app.use(express.static('public'))
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`)
})
