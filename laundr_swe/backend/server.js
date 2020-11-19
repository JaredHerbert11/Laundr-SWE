import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config/config.js'
import laundrProductRouter from './routes/products.js';
import {connectToDatabase} from './connectMongodb.js';

//connect to database
const db = connectToDatabase().on(
   "error",
   console.error.bind(console, "MongoDB connection error:")
 );
 db.once("open", () => {
   console.log("Successfully connected to mongoose database!");
   
 });

//initialize app
const app = express();

//enable request logging for development debugging
app.use(morgan('dev'));

//body parsing middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

/* serve static files - see http://expressjs.com/en/starter/static-files.html */
app.use('/', express.static('./../../client'));


app.use('/api/laundrProducts/', laundrProductRouter);


app.all('/*', (req, res) => {

   res.statusCode === 404 ? res.send('Sorry, information not available') : res.sendFile(path.resolve('./client/index.html'))
        
});

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('../build'));
}

app.listen(config.port, () => console.log(`App now listening on port ${config.port}`));