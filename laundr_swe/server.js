const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const express = require('express');
const app = express();
app.use(express.static('.'));

const YOUR_DOMAIN = 'http://localhost:3000/';

app.use(express.json());
app.use(express.urlencoded());

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

app.listen(4242, () => console.log('Running on port 4242'));