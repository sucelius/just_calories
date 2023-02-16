require('@babel/register')
require('dotenv').config()
const path = require('path')
const express = require('express')
const morgan = require('morgan')
// const cors = require('cors')
const session = require('express-session'); // библиотека для работы с сессиями// cookie-parser уже включен в express-session
const FileStore = require('session-file-store')(session);



const indexRouter = require('./src/routes/index')

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

const sessionConfig = {
  name: 'sid', // название куки
  store: new FileStore({}), // подключаем БД для храненя куков
  secret: process.env.COOKIE_SECRET, // ключ для шифрования cookies // require('crypto').randomBytes(10).toString('hex')
  resave: false,                     // Если true,  пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // Если false, куки появляются только при установке req.session
  httpOnly: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production', // В продакшне нужно "secure: true" для работы через протокол HTTPS
    maxAge: 1000 * 60 * 60 * 24 * 10, // время жизни cookies, ms (10 дней)
  },
}

app.use(session(sessionConfig));

app.use((req, res, next) => {
  console.log("\n\x1b[33m", 'req.session.user :', req.session?.user);
  res.locals.username = req.session?.user?.name;
  next();
});

app.use('/', indexRouter)


// app.get('/data', (req,res) => {
    
//     // console.log(res)
// })






app.listen(PORT , () => {

})

