import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"
import './style/ReserveCard.css'
import getDaysFromDates from "../../services/getDaysFromDates"
import './style/FromReviews.css'

const FormReviews = ({reservations,reserveSelected, setReserveSelected, openModal,setOpenModal}) => {
    console.log(reserveSelected);
    const ReserDays = getDaysFromDates(reserveSelected?.checkIn, reserveSelected?.checkOut)

    const {handleSubmit, register, reset} = useForm()

    const [ , , createRewiew] = useCrud()

    const submit = data => {
        const obj = {
            ...data,
            hotelId:reserveSelected?.hotelId,
            rating: +data.rating
        }
        createRewiew('/reviews', obj)
        reset({
            rating:'5',
            comment:''
        })
        setReserveSelected()
        setOpenModal(true)
    }
    const  handleClose = () =>{
        
            setOpenModal(true)
        
    }
console.log(reservations);
  return (
    <div className={`container-form-revews `}>
        <form className="reviews__form" onSubmit={handleSubmit(submit)}>
            <div className="reviews__X" onClick={handleClose}>X</div>
            <h3 className="reviews__title">Reviews</h3>
            <article className="reserveSelected">
                <header className="reserveSelected__header">
                    <img src={reserveSelected?.hotel.images[0].url} alt="" className="reserveSelected__img" />
                </header>
                <section className="reserveSelected__info">
                    <h3 className="reserveSelected__name">{reserveSelected?.hotel.name}</h3>
                    <div className="reserveSelected__location">{reserveSelected?.hotel.city.name},{reserveSelected?.hotel.city.country}</div>
                </section>
                <section className="reserveSelected__day__price">
                    <div className="reserveSelected__days">
                        <span className="reserveSelected__days__label">Reservations Days: </span>
                        <span className="reserveSelected__days__value">{ReserDays}</span>
                    </div>
                    <div className="reserveSelected__subtotal">
                        <span className="reserveSelected__subtotal__label">Subtotal Price:</span>
                        <span className="reserveSelected__subtotal__value">{Number(reserveSelected?.hotel.price)*ReserDays}</span>
                    </div>
                </section>
            </article>
            <label className="reviews__label__rating">
                <span className="reviews__span__name">Rating</span>
                <select {...register('rating')} className="resiews__ratin">
                    <option value="5">⭐⭐⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="1">⭐</option>
                </select>
            </label>
            <label className="reviews__label">
                <span className="reviews__span__name">Comments</span>
                <textarea {...register('comment')} className="reviews__comment__value" />
            </label>
            <button className="reviews__btn">Submit</button>
        </form>
    </div>
  )
}

export default FormReviews