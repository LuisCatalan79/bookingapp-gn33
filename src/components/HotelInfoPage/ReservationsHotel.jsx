import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"
import './styles/ReservationsHotel.css'

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
    <section className="hotel__reservations">
        <h3 className="hotel__reservations__title">Reservations</h3>
        <form onSubmit={handleSubmit(submit)} className="form-reservations">
          <div className="form-reservations__fields">
            <label className="form-reservations__label">
              <span className="form-reservations__span">Check-in</span>
              <input {...register('checkIn')} type="date"  className="form-reservations__input"/>
            </label>
            <label className="form-reservations__label">
              <span className="form-reservations__span">Check-out</span>
              <input {...register('checkOut')} type="date" className="form-reservations__input" />
            </label>
            <button className="form-reservations__btn">Submit</button>
          </div>
      </form>
    </section>
  )
}


export default ReservationsHotel