import { Login } from '../components/profile/login';
import { Register } from '../components/profile/register';
import { EditProfile } from '../components/profile/edit_profile';
import { EditAddress } from '../components/profile/edit_address';
import { EditBilling } from '../components/profile/edit_billing';


export default function Profile() {
  return (
    <div>
        <Login/>
        <div className="my-10"/>
        <Register/>
        <div className="my-10"/>
        <EditProfile/>
        <div className="my-10"/>
        <EditAddress/>
        <div className="my-10"/>
        <EditBilling/>
    </div>
  )
}