const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
//connects session to database
const helpers = require('./utils/helper')
const SequelizeStore = require ('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection');
const routes = require('./controllers');

const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
  secret: 'Secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

// // turn on routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening at http://localhost:3002'));
}).catch(err => console.log(err));
//
