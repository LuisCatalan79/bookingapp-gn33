import useCrud from "../../hooks/useCrud";
import getDaysFromDates from "../../services/getDaysFromDates";
import './style/ReserveCard.css'

const ReserveCard = ({reserve,deleteReservation,setReserveSelected, setOpenModal}) => {



const ReserDays = getDaysFromDates(reserve.checkIn, reserve.checkOut)

const handleDelete = () => {
    deleteReservation('/bookings', reserve.id)
}

const handleReviews = ()  => {
  setReserveSelected(reserve)
  setOpenModal(false)
}


  return (
    <article className="reservations__article">
        <header className="reservations__header">
            <img className="reservations__img" src={reserve.hotel.images[0].url} alt="" />
        </header>
        <section className="reservations__info">
            <h3 className="reservations__name__hotel">{reserve.hotel.name}</h3>
            <div className="reservations__name__cityAndCountry">{reserve.hotel.city.name},{reserve.hotel.city.country}</div>
            <div onClick={handleReviews} className="reservations__comment">Rate and comment this visit...</div>
        </section>
        <section className="reserve__day__price">
            <div className="reservations__days">
              <span className="reservations__days__label">Reservations day:</span>
              <span className="reservations__days__value">{ReserDays}</span>
            </div>
            <div className="reservations__subtotal">
              <span className="reservations__subtotal__label">Subtotal Price:</span>
              <span className="reservations__subtotal__value">{Number(reserve.hotel.price)*ReserDays}</span>
            </div>
        </section>  
          
        <button onClick={handleDelete} className="reservations__btn">
          <span className="material-symbols-outlined">delete</span>
        </button>
    </article>

  )
}

export default ReserveCard