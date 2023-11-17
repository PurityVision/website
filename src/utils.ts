import { Stripe, loadStripe } from '@stripe/stripe-js'

export const getEnv = (name: string): string | undefined => {
  return process.env[`NEXT_PUBLIC_${name}`]
}

export const getStripePricePerThousand = (): number => {
  // TODO: api call Stripe here
  // current price/image on stripe
  const visionPricePerImgUSD = 1.50 // USD
  const markup = 0.1
  return visionPricePerImgUSD + (visionPricePerImgUSD * markup)
}

let stripePromise: Promise<Stripe | null>
export const getStripe = async (): Promise<Stripe | null> => {
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  if (stripeKey === undefined) {
    return null
  }

  if (stripePromise === null) {
    stripePromise = loadStripe(stripeKey)
  }
  return await stripePromise
}

export default getStripe
