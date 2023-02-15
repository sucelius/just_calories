require('@babel/register')
require('dotenv').config()
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')


const renderTemplate = require('./src/lib/renderTemplate')
const Main = require('./src/views/Main')

const app = express()
const PORT = process.env.PORT ?? 3000; 

app.use((req, res, next) => {
    const whiteList = ['https://api.calorieninjas.com'];
    const origin = req.get('origin');
    console.log(origin)
  
    if (whiteList.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Headers', ['Content-Type']);
      res.setHeader('Access-Control-Allow-Methods', ['GET', 'POST', 'PUT']);
    //   res.setHeader('Access-Control-Allow-Credentials', true);
    }
  
    next();
  });

// app.use(cors())


app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src/public/')));


app.get('/',  (req,res) => {
    console.log(res.body)
    renderTemplate(Main,{}, res)
    // res.send('Hello!')
})


app.get('/data', (req,res) => {
    
    // console.log(res)
})






app.listen(PORT , () => {

})

