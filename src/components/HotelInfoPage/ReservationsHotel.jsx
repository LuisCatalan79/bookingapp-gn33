import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"


const ReservationsHotel = ({hotelId}) => {

   const {handleSubmit, reset, register} = useForm()

    const [ ,,createReservation ] = useCrud()

    const submit = data => {
        const obj ={
            ...data,
            hotelId
        }
        createReservation('/bookings', obj)
    }

  return (
    <div>
        <h3>Reservations</h3>
        <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Check-in</span>
          <input {...register('checkIn')} type="date" />
        </label>
        <label>
          <span>Check-out</span>
          <input {...register('checkOut')} type="date" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ReservationsHotel