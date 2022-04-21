const express = require("express")
const cors = require('cors')
const path = require('path'); // econtrar rutas
const { json, urlencoded } = express;
const router = require('./src/routes');

const app =  express(); // app lanzada
const port =  process.env.PORT || 8080;

app.use(json());
app.use(urlencoded({ extended: false }));

const corsOptions ={
    origin: '*', // todos puedan hacer peticiones
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions)); // asignar al servidor

app.use(router);
app.use('/home',(req,res)=>{
    res.sendFile(path.join(__dirname+'/src/html/index.html'));
});

app.use('/',(req,res)=>{
    res.send("This is the microservice 1 and version v1.0.0");
});

app.listen(port,()=>{
    console.log(`Server listenig on port ${port}`);
});




