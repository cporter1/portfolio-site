import { useState } from "react"

export default function WarningPage({handleTask, children}) {

    const [delTask , setDelTask] = useState(false)

    // sets invisible html to visible
    // using ID for uniquenes for multiple on the same page
    const handleConfirmationBox = () => {
        if (!delTask) {
          document.querySelector('#' + 'popup-page').style.display = "flex"
          document.querySelector('#' + 'popup-bg').style.display = "flex"
          setDelTask(true)
        } else {
          document.querySelector('#' + 'popup-page').style.display = "none"
          document.querySelector('#' + 'popup-bg').style.display = "none"
          setDelTask(false)
      }
    }

    return (
      <>  
        <button className='contactme-submit-button'
          onClick={() => {handleConfirmationBox()}} >
            Submit
        </button>
        <div className="popup-container" id='popup-page'>
          <div className="confirmation-text">
            Send Message?
          </div>
          <div className="button-container">
            <button 
              className="cancel-button" 
              onClick={() => handleConfirmationBox()}>
              Cancel
            </button>
            <button 
              className="confirmation-button"
              type="submit"
              onClick={(event) => {handleConfirmationBox(); handleTask(event)}}>
              Yes
            </button>
          </div>
        </div>
        <div className="popup-bg" id='popup-bg' 
          onClick={() => handleConfirmationBox()}/>
      </>
    )
}