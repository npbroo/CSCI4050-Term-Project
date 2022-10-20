import { OrderConfirmation } from "../components/confirmations/order_confirmation"
import { RegistrationConfirmation } from "../components/confirmations/registration_confirmation"

export default function Movies() {
  return (
    <div className='max-w-screen-xl mx-10 my-10'>
        <OrderConfirmation/>
        <div className="my-10"/>
        <RegistrationConfirmation/>
    </div>
  )
}