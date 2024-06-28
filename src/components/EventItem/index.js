// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, isActive, setActiveEventId} = props
  const {imageUrl, name, location, id} = eventDetails
  const ImageClassName = isActive ? 'event-image active' : 'event-image'

  const onclickevent = () => {
    setActiveEventId(id)
  }
  return (
    <li className="event-Details">
      <button type="button" className="event-button" onClick={onclickevent}>
        <img src={imageUrl} alt="event" className={ImageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
