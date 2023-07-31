// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
import { NextApiRequest, NextApiResponse } from 'next'
import { exit } from 'process'
import Stripe from 'stripe'

const stripeSecKey = process.env.STRIPE_SECRET_KEY
if (stripeSecKey === undefined) {
  console.log('stripe secret key not found in environment')
  exit(1)
}

const stripePriceID = process.env.STRIPE_PRICE_ID
if (stripePriceID === undefined) {
  console.log('stripe price ID not found in environment')
  exit(1)
}

const stripe = new Stripe(stripeSecKey, {
  apiVersion: '2022-11-15'
})

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'POST') {
    try {
      if (req.headers.origin === undefined) {
        res.status(400)
        return
      }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [{ price: stripePriceID }],
        mode: 'subscription',
        success_url: `${req.headers.origin}/checkout?status=success`,
        cancel_url: `${req.headers.origin}/?checkout?status=fail`,
        automatic_tax: { enabled: true }
      })

      res.redirect(303, session.url ?? '')
    } catch (err: any) {
      const errCode = err.statusCode ?? 500
      res.status(errCode).json(err.message)
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
