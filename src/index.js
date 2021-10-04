const express = require('express');
const morgan = require('morgan');

const app = express();

// Config
app.set('port', process.env.PORT || 3000);

//midelware
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use(require('./routes/tasks.routes'));


// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});