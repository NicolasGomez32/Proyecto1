const express = require ('express');
const app = express ();
const path = require ('path');
const morgan = require ('morgan');
const mongoose = require ('mongoose');
//Imports
const indexRoutes = require ('../src/Routes/index')

//Db connection

mongoose.connect('mongodb://localhost:27017/Baseuno', {
    useNewUrlParser:true,
    useUnifiedTopology: true
})

.then (db => console.log("Db is connected"))
.catch (err => console.log(err));

//Settings

app.set('Port', process.env.PORT || 3000)
app.set('views', path.join(__dirname , '/views'))
app.set('view engine' , 'ejs');
//Middlewares
app.use(morgan ('dev'));
app.use(express.urlencoded({extended : false}));

//Routes
app.use('/' , indexRoutes)


//Ports
app.listen(app.get('Port'), () => {
    console.log(`Server on port ${app.get('Port')}`);
})