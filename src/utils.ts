export const getEnv = (name: string): string | undefined => {
  return process.env[`NEXT_PUBLIC_${name}`]
}

export const getStripePrice = (): number => {
  // TODO: api call Stripe here
  // current price/image on stripe
  const visionPricePerImg = 0.0015
  const markup = 2
  return visionPricePerImg * markup
}
