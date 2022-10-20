import { ManagePrices } from "../components/admin_view/manage_prices"
import { ManageMovies } from "../components/admin_view/manage_movies"
import { ManageUsers } from "../components/admin_view/manage_users"
import { ManagePromos } from "../components/admin_view/manage_promos"

export default function Movies() {
  return (
    <div className='max-w-screen-xl mx-10 my-10'>
        <h1 className='text-4xl mb-5 text-center'>
            Admin View
        </h1>
        <ManagePrices/>
        <div className="my-10"/>
        <ManageMovies/>
        <div className="my-10"/>
        <ManageUsers/>
        <div className="my-10"/>
        <ManagePromos/>
    </div>
  )
}