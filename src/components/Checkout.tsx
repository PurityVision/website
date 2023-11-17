import Button from './button'

// 4242 4242 4242 4242

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '')
//  .catch(err => console.log(err))

// const notify = (): string => toast('Here is your toast.')

export default function Checkout (): JSX.Element {
  // React.useEffect(() => {
  //   // Check to see if this is a redirect back from Checkout
  //   const query = new URLSearchParams(window.location.search)
  //   if (query.get('success') !== null) {
  //     toast.success('Order placed! You will receive an email confirmation.')
  //   }

  //   if (query.get('canceled') !== null) {
  //     toast('Order canceled -- continue to shop around and checkout when you’re ready.')
  //   }
  // }, [])

  return (
    <form action='/api/checkout_sessions' method='POST'>
      <section>
        <Button type='submit' className='tracking-widest'>
          Subscribe
        </Button>
      </section>
    </form>
  )
}
