import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config/config.js'
import laundrProductRouter from './routes/products.js';
import {connectToDatabase} from './connectMongodb.js';
import dotenv from 'dotenv'

const __dirname = path.resolve();

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

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

app.use('/api/laundrProducts/', laundrProductRouter);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'build')));

  // Handle React routing, return all requests to React app
  app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}
else {
  app.all('/*', (req, res) => {
    res.statusCode === 404 ? res.send('Sorry, information not available') : res.sendFile(path.resolve('./build/index.html'))   
 });
}

const port = process.env.PORT || config.port;

app.listen(port, () => console.log(`App now listening on port ${port}`));