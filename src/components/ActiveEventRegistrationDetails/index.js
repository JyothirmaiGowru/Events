// Write your code here
import './index.css'

const registrationStatus = {
  yetToregister: 'YET_TO_REGISRER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeeventregistrationstatus} = props

  const renderNoActiveEvent = () => (
    <p className="no-active-event-registration">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-registration"
      />
      <h1 className="registration-heading">Registrations Are Closed Now!</h1>
      <p className="registration-description">Stay tuned. We will reopen</p>
    </div>
  )

  const renderRegisteredview = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-view"
      />
      <h1 className="registration-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegister = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register"
      />
      <p className="registration-description">
        A live performance brings so much to your relationship with dance
      </p>
      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderActiveDetailsEvent = () => {
    switch (activeeventregistrationstatus) {
      case registrationStatus.yetToregister:
        return renderYetToRegister()
      case registrationStatus.registered:
        return renderRegisteredview()
      case registrationStatus.registrationsClosed:
        return renderRegistrationClosedView()
      default:
        return renderNoActiveEvent()
    }
  }
  return (
    <div className="registration-status-container">
      {renderActiveDetailsEvent()}
    </div>
  )
}
export default ActiveEventRegistrationDetails
