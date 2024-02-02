import { useEffect, useState } from "react"
import useCrud from "../hooks/useCrud"
import ReserveCard from "../components/ReservationsPage/ReserveCard"
import './styles/ReservationsPage.css'
import FormReviews from "../components/ReservationsPage/FormReviews"

const ReservationsPage = () => {

  const [openModal, setOpenModal] = useState(true)

  const [reserveSelected, setReserveSelected] = useState()

    const [reservations, getReservations, , deleteReservation] = useCrud()

    useEffect(() => {
      getReservations('/bookings')
    }, [])
      
   

  return (
    <div className="reservations">
        <h2 className="reservations__title" >Reservations</h2>
        <div className={`modal-reviews ${openModal?'close-reviews':''}`}>
          <FormReviews            
            reserveSelected={reserveSelected}
            setReserveSelected={setReserveSelected}
            reservations={reservations}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </div>

        <div className="reservations__container">
            {
                reservations?.map(reserve => (
                    <ReserveCard
                        key={reserve.id}
                        reserve={reserve}
                        deleteReservation={deleteReservation}
                        setReserveSelected={setReserveSelected}
                        setOpenModal={setOpenModal}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default ReservationsPage