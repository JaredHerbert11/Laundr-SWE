import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config/config.js'
import laundrProductRouter from './routes/products.js';
import {connectToDatabase} from './connectMongodb.js';
import dotenv from 'dotenv'
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_KEY);

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

let YOUR_DOMAIN;

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'build')));

  // Handle React routing, return all requests to React app
  app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  if (window.location.href === 'http://localhost:5000/') {
    YOUR_DOMAIN = 'http://localhost:5000/';
  }
  else {
    YOUR_DOMAIN = 'https://laundr-swe-app.herokuapp.com/';
  }
}
else {
  app.all('/*', (req, res) => {
    res.statusCode === 404 ? res.send('Sorry, information not available') : res.sendFile(path.resolve('./build/index.html'))   
  });

  YOUR_DOMAIN = 'localhost:3000'
}

app.post('/create-session', async (req, res) => {
  let item = [];
  for (let i = 0; i < req.body.length; i++){
    let temp = {
      price_data: {
        currency: 'usd',
        product_data: {
          name: req.body[i].id,
          images: ['https://i.imgur.com/y0Xntmz.jpg'],
        },
        unit_amount: req.body[i].price,
      },
      quantity: req.body[i].quantity,
    }
    item.push(temp);
  }
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: item,
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.json({ id: session.id });
});

const port = process.env.PORT || config.port;

app.listen(port, () => console.log(`App now listening on port ${port}`));