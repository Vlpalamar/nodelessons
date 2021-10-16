//создали сервер
const express= require('express')
const app= express()

// cоздали папку для харанения статических файлов
const path= require('path')
app.use(express.static(path.join(__dirname,'public')))

//создали хранилище для временных файлов
const multer= require('multer')
app.use(multer(
    {dest:path.join(__dirname,'public/uploads')})
    .single('fileData'))

//настроили обработку запоосов
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json)

//подключили роутер
const router= require('./routes')
app.use(router)


//если нужно будет подключить кросспладформу
const cors = require("cors");
// let corpsOptions={
//     origin:'http:localhost:3030',
//     optionsSuccessStatus: 200}
//потом разберусь
app.use(cors());


//подключили БД
const mongoUrl= "mongodb+srv://palamar:z1qx2wc3ev4r@nodecluster.iqknn.mongodb.net/ExamDatabase?retryWrites=true&w=majority"
const mongoose= require('mongoose')
mongoose.connect(mongoUrl,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err)
    {
        if (err){console.log(err); return}
        console.log('http//localhost:3030')
        app.listen(3030)
    }
    )
