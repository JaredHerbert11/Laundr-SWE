import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config/config.js'
import laundrProductRouter from './routes/products.js';
import dotenv from 'dotenv';
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const __dirname = path.resolve();

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

//initialize app
const app = express();

//enable request logging for development debugging
app.use(morgan('dev'));

//body parsing middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

let YOUR_DOMAIN = 'http://localhost:3000/';

app.post('/create-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.json({ id: session.id });
});

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