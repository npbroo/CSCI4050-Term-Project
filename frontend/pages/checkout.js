import { OrderSummary } from '../components/checkout/order_summary';
import { CheckoutForm } from '../components/checkout/checkout_form';

export default function Checkout() {
  return (
    <div className='max-w-screen-xl m-10'>
        <OrderSummary/>
        <div className="my-10"/>
        <CheckoutForm/>
    </div>
  )
}