import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import cors from 'cors';
import { getData } from '../src/data/data.js';


const __dirname = path.resolve();

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const stripe = new Stripe(process.env.STRIPE_KEY_SEC);

//initialize app
const app = express();

// Add headers
app.use(cors());

//enable request logging for development debugging
app.use(morgan('dev'));

//body parsing middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/create-session', async (req, res) => {
  let cart = [];
  let tome = getData();
  for (let i = 0; i < req.body.length; i++){
    let item = tome.find(product => product.name === req.body[i].id)
    console.log(item.imageURL);
    let temp = {
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: [item.imageURL],
        },
        unit_amount: item.price,
      },
      quantity: req.body[i].quantity,
    }
    cart.push(temp);
  }
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: cart,
    mode: 'payment',
    success_url: `${process.env.YOUR_DOMAIN}?success=true`,
    cancel_url: `${process.env.YOUR_DOMAIN}?canceled=true`,
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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App now listening on port ${port}`));