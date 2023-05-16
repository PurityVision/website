import Button from './button'

const Header: React.FC = (): JSX.Element => {
  return (
    <header className='flex justify-between p-8 bg-slate-50 border-b shadow-sm'>
      {/* TODO: Use logo here. */}
      <p className='text-3xl uppercase font-bold'>
        Purity Vision
      </p>
      <Button>
        <a href='https://billing.stripe.com/p/login/test_5kAcPK8h1c376C4cMM'>
          Manage Subscription
        </a>
      </Button>

    </header>
  )
}

export default Header
