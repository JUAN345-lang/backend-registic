const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const indexRoutes = require('./routes/index');

//configuraciones
app.set('port', process.env.PORT || 3000);
mongoose.connect('mongodb://localhost:27017')
.then(db => console.log('connected'))
.catch(err => console.log(err));

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(cors())
//rutas
app.use('/', indexRoutes);

//inicio servidor
app.listen(app.get('port'), () => {
  console.log(`listening`);
});