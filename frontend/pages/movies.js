import { SelectMovie } from '../components/select_movie';
import { SelectShowtime } from '../components/select_showtime';
import { SelectSeats } from '../components/select_seats';

export default function Movies() {
  return (
    <div className='max-w-screen-xl mx-10 my-10'>
    <SelectMovie/>
    <div className='my-24'/>
    <SelectShowtime/>
    <div className='my-24'/>
    <SelectSeats/>
    </div>
  )
}